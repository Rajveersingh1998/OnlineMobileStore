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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ResponseDTO;
import com.app.pojos.Brands;
import com.app.pojos.Mobiles;
import com.app.service.IBrandService;
import com.app.service.IMobileService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/mobiles")
public class MobileController {

	 @Value("${file.upload-dir}")
     private String FILE;
	 
	//Dependancy injection
	@Autowired
	private IMobileService mobileService;
	
	@Autowired
	private IBrandService brandService;
	
	@GetMapping
	public ResponseDTO<?> getAllMobiles(){
		System.out.println("in getAllMobiles");
		try {	
			return  new ResponseDTO<>(HttpStatus.OK, "All Available Mobiles", mobileService.getAvailiableMobiles() );
		}catch (RuntimeException e) {
			System.out.println("err in getAllMobiles : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "mobiles not available", null);
		}
	}
	
	@PostMapping("/addMobile")
	 public ResponseDTO<?> addMobile(@RequestParam MultipartFile mthumb ,@RequestParam String mmodel,@RequestParam String mname,@RequestParam String mcolor,@RequestParam String imei, 
			                @RequestParam  @DateTimeFormat(pattern = "yyyy-MM-dd") String mdate,@RequestParam double mprice,@RequestParam int mbrand) throws IOException{
        System.out.println("in add mobile");
        File imageFile = new File(FILE+mthumb.getOriginalFilename());
        imageFile.createNewFile();
        FileOutputStream fos = new FileOutputStream(imageFile);
        fos.write(mthumb.getBytes());
        fos.close(); 
        Brands isBrandExist = brandService.findBrandBYId(mbrand);
        if(isBrandExist != null) {
        	
        	  Mobiles newMobile = new Mobiles(mmodel,mname,mcolor,mthumb.getOriginalFilename(),imei,LocalDate.parse(mdate),mprice,"bestSell");
        	  newMobile.setChosenBrand(isBrandExist);
        	  mobileService.addMobile(newMobile);
        	  
        	  return new ResponseDTO<>(HttpStatus.OK,"Mobile Added sucessfully",mthumb.getOriginalFilename());
        }else {
        	return new ResponseDTO<>(HttpStatus.NOT_FOUND,"Cannot add Mobile",null);
        }
       
        
        
    }
	
}
