package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.dto.SpecsDTO;
import com.app.pojos.Mobiles;
import com.app.pojos.Specifications;
import com.app.service.IMobileService;
import com.app.service.ISpecsService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/specs")
public class SpecificationController {
  
	//Dependency Injection
	@Autowired
	private ISpecsService specsService;
	@Autowired
	private IMobileService mobileService;
	
	
	@PostMapping("/addspecifications")
	public ResponseDTO<?> addSpecifications(@RequestBody SpecsDTO specs){
		System.out.println("in addSpecification ctr: ");
		try {		
			Mobiles mobileExist = mobileService.getMobileById(specs.getMid());
			
			if(mobileExist != null) {
				Specifications newSpec = new Specifications();
				newSpec.setRam(specs.getRam());
				newSpec.setRom(specs.getRom());
				newSpec.setScreenSize(specs.getSsize());
				newSpec.setBattery(specs.getBattery());
				newSpec.setOs(specs.getOs());
				newSpec.setRearCam(specs.getRcam());
				newSpec.setFrontCam(specs.getFcam());
				newSpec.setDimensions(specs.getDim());
				newSpec.setNetwork(specs.getNetwork());
				newSpec.setSim(specs.getSim());
				newSpec.setMobile(mobileExist);
				return new ResponseDTO<>(HttpStatus.OK, "specification added sucessfully" , specsService.addAllSpecs(newSpec));
			}
			return new ResponseDTO<>(HttpStatus.NOT_FOUND, "Mobile not available" , null);
		}catch (RuntimeException e) {
			System.out.println("err in adding specifications : "+e); 
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "ERROR!! while adding specifications", null);
		}	
		
	}
	
	@GetMapping
	public ResponseDTO<?> getSpecifications(){
		System.out.println("in getListofSpecifications");
		try {	
			return  new ResponseDTO<>(HttpStatus.OK, "List of Specifications", specsService.getAllSpecifications());
		}catch (RuntimeException e) {
			System.out.println("err in getSpecifications : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error while getting specifications", null);
		}
	}
	
	@GetMapping("/{mobileId}")
	public ResponseDTO<?> getSpecificationsOfMobile(@PathVariable int mobileId){
		System.out.println("in getSpecficationOfMobile");
		try {				  
			return  new ResponseDTO<>(HttpStatus.OK, "List of Specifications", specsService.findSpecsOfMobile(mobileId));
		}catch (RuntimeException e) {
			System.out.println("err in getSpecficationOfMobile : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error while getting specifications", null);
		}
	}
	
	
}
