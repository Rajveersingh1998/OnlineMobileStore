package com.app.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ResponseDTO;
import com.app.pojos.Brands;
import com.app.pojos.Mobiles;
import com.app.pojos.Specifications;
import com.app.service.IBrandService;
import com.app.service.IMobileService;
import com.app.service.ISpecsService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/mobiles")
public class MobileController {

	 @Value("${file.upload-dir}")
     private String FILE;
	 
	//Dependency injection
	@Autowired
	private IMobileService mobileService;
	
	@Autowired
	private IBrandService brandService;
	
	@Autowired
	private ISpecsService specsService;
	
	@GetMapping
	public ResponseDTO<?> getAllMobiles(){
		System.out.println("in getAllMobiles");
		try {	
			return  new ResponseDTO<>(HttpStatus.OK, "All Available Mobiles", mobileService.getAvailiableMobiles());
		}catch (RuntimeException e) {
			System.out.println("err in getAllMobiles : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "mobiles not available", null);
		}
	}
	
	@PostMapping("/addMobile")
	 public ResponseDTO<?> addMobile(@RequestParam MultipartFile mthumb ,@RequestParam String mmodel,@RequestParam String mname,@RequestParam String mcolor,@RequestParam String imei, 
			                @RequestParam  @DateTimeFormat(pattern = "yyyy-MM-dd") String mdate,@RequestParam double mprice,@RequestParam int mqty,@RequestParam int mbrand) throws IOException{
        System.out.println("in add mobile");
        File imageFile = new File(FILE+mthumb.getOriginalFilename());
        imageFile.createNewFile();
        FileOutputStream fos = new FileOutputStream(imageFile);
        fos.write(mthumb.getBytes());
        fos.close(); 
        Brands isBrandExist = brandService.findBrandBYId(mbrand);
        if(isBrandExist != null) {
        	
        	  Mobiles newMobile = new Mobiles(mmodel,mname,mcolor,mthumb.getOriginalFilename(),mqty,imei,LocalDate.parse(mdate),mprice,"bestSell");
        	  newMobile.setChosenBrand(isBrandExist);
        	  mobileService.addMobile(newMobile);
        	  
        	  return new ResponseDTO<>(HttpStatus.OK,"Mobile Added sucessfully",mthumb.getOriginalFilename());
        	  
        }else {
        	return new ResponseDTO<>(HttpStatus.NOT_FOUND,"Cannot add Mobile",null);
        }     
    }
	
	@PutMapping("/update/{mobileId}")
	public ResponseDTO<?> updateMobile(@RequestBody Mobiles mobile, @PathVariable int mobileId){
		System.out.println("in updateMobile ");
		System.out.println(mobile.getPrice()+" "+mobile.getFlag());
		try {		
			mobileService.updateMobilePrice(mobile.getPrice(), mobileId,mobile.getFlag());
			return new ResponseDTO<>(HttpStatus.OK, "Mobile Price Updated Sucessfully :" , mobile.getPrice());
		}catch (RuntimeException e) {
			System.out.println("err in Updating: "+e); 
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Cannot update mobile ", null);
		}
	}
	
	@DeleteMapping("/{mobileId}")
	public ResponseDTO<?> deleteMobile(@PathVariable int mobileId){
				  System.out.println("in delete Mobile");
		try {	
			Specifications specsExist = specsService.findSpecsOfMobile(mobileId);
			if(specsExist != null) {
				 
				specsService.deleteSpecification(specsExist.getId());
				mobileService.deleteMobile(mobileId);
				
				return new ResponseDTO<>(HttpStatus.OK, "Mobile with "+mobileId +" Deleted Sucessfully", null);
			}else {
				return new ResponseDTO<>(HttpStatus.NOT_FOUND, "Specs with :"+mobileId +"not Found", null);
			}					
		}catch (RuntimeException e) {
			System.out.println("err in deleting Mobile : "+e); 
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Mobile not deleted ", null);
		}
	}
	
	@GetMapping("/bestsale")
	public ResponseDTO<?> getBestSellingMobiles(){
		System.out.println("in geting bs Mobiles ");
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "All best selling mobiles" , mobileService.getAllBestSellingMobiles());
		}catch (RuntimeException e) {
			System.out.println("err in geting bs Mobiles: "+e); 
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "ERROR while Getting BestSelling Mobiles ", null);
		}
	}
	
	@GetMapping("/upcoming")
	public ResponseDTO<?> getUpcomingMobiles(){
		System.out.println("in geting up Mobiles ");
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "All upcoming mobiles" , mobileService.getAllUpcomingMobiles());
		}catch (RuntimeException e) {
			System.out.println("err in geting up Mobiles: "+e); 
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "ERROR while Getting upcoming Mobiles ", null);
		}
	}
	
	@GetMapping("/trending")
	public ResponseDTO<?> getTrendingMobiles(){
		System.out.println("in geting trnd Mobiles ");
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "All trending mobiles" , mobileService.getAllTrendingMobiles());
		}catch (RuntimeException e) {
			System.out.println("err in geting trnd Mobiles: "+e); 
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "ERROR while Getting trending Mobiles ", null);
		}
	}
	
}
