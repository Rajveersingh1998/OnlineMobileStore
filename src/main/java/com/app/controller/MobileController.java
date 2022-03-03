package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.service.IMobileService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/mobiles")
public class MobileController {

	
	//Dependancy injection
	@Autowired
	private IMobileService mobileService;
	
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
	
}
