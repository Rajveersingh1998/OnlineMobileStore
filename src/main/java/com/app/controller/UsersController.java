package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.pojos.Users;
import com.app.service.IUsersService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UsersController {

	
	//D.I
	@Autowired
	private IUsersService userService;
	
	
	@PostMapping("/signin/admin")
	public ResponseDTO<?> authenticateUser(@RequestBody LoginRequest loginRequest){
		System.out.println("in authenticateUser: "+loginRequest);
		try {		
			Users u = userService.authenticateUser(loginRequest);
			System.out.println("Users : "+u);
			return new ResponseDTO<>(HttpStatus.OK, "login sucessfully", u);
		}catch (RuntimeException e) {
			System.out.println("err in authenticateUser : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error", null);
		}
	}
	
	@GetMapping("/customers")
	public ResponseDTO<?> getListOfCustomers(){
		System.out.println("in getListOfCustomers");
		try {	
			return  new ResponseDTO<>(HttpStatus.OK, "User Details", userService.getAllCustomers());
		}catch (RuntimeException e) {
			System.out.println("err in getListOfCustomers : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User Details", null);
		}
	}
}
