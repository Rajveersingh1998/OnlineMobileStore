package com.app.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ResponseDTO;
import com.app.pojos.Brands;
import com.app.service.IBrandService;



@CrossOrigin(origins="*")
@RestController
@RequestMapping("/brands")
public class BrandController {
	
	   @Value("${file.upload-dir}")
	     private String FILE;
	 
	   @Autowired
	   private IBrandService brandService;

	    @PostMapping("/addbrand")
	    public ResponseEntity<Object> imageUpload(@RequestParam MultipartFile brandImg ,@RequestParam String bname) throws IOException{
            System.out.println("in Brand imageUpload");
	        File imageFile = new File(FILE+brandImg.getOriginalFilename());
	        imageFile.createNewFile();
	        FileOutputStream fos = new FileOutputStream(imageFile);
	        fos.write(brandImg.getBytes());
	       	        
	        Brands newBrd = new Brands();
	        newBrd.setBrandName(bname);
	        newBrd.setBrandImage(brandImg.getOriginalFilename());
	        
	        brandService.addBrand(newBrd);
	        fos.close();
	        
	        return new ResponseEntity<Object>(brandImg.getOriginalFilename(),HttpStatus.OK);
	    }
	    
	    @GetMapping("/allBrands")
	    public ResponseDTO<?> getAllBrands(){
	    	
	    	System.out.println("in getAllBrands");
			try {	
				return  new ResponseDTO<>(HttpStatus.OK, "Brands Details", brandService.getAllBrands());
			}catch (RuntimeException e) {
				System.out.println("err in getAllBrands : "+e);
				return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "ERROR", null);
			}
	    }
	    
	    @PutMapping("/update")
	    public ResponseDTO<?> updateBrand(@RequestParam int bid , @RequestParam MultipartFile bthumb){
	    	
	    	System.out.println("in updateBrand");
			try {				   
				Brands brandExist = brandService.findBrandBYId(bid);
				
				if(brandExist != null) {
					File imageFile = new File(FILE+bthumb.getOriginalFilename());
			        imageFile.createNewFile();
			        FileOutputStream fos = new FileOutputStream(imageFile);
			        fos.write(bthumb.getBytes());
			
			        
			        brandService.updateBrand(bid, bthumb.getOriginalFilename());
			        fos.close();
					 
				     return  new ResponseDTO<>(HttpStatus.OK, "Updated Brand ", null);		
				}else {
					return  new ResponseDTO<>(HttpStatus.NOT_FOUND, "Brand Not Available", null);		
				}
			}catch (Exception e) {
				   System.out.println("err in updateBrand : "+e);
				return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "ERROR", null);
			}	    		    	
	    }
	    
	     
}
