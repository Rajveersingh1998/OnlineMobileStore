package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.ResponseDTO;
import com.app.pojos.Role;
import com.app.pojos.Users;
import com.app.service.IUsersService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/admin")
public class AdminController {

	
	//D.I
	@Autowired
	private IUsersService userService;
	
	
	@PostMapping("/signin")
	public ResponseDTO<?> authenticateUser(@RequestBody LoginRequest loginRequest){
		System.out.println("in authenticateUser: "+loginRequest);
		try {	
			
			if(userService.findRole(loginRequest.getEmail()).toString().toUpperCase().equals(loginRequest.getRole().toString().toUpperCase())) {
			Users u = userService.authenticateUser(loginRequest);
			
			System.out.println("Users : "+u);
			return new ResponseDTO<>(HttpStatus.OK, "login sucessfully", u);
			}else
				return new ResponseDTO<>(HttpStatus.NOT_FOUND, "login sucessfully", null);
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
	
	@DeleteMapping("/customer/{email}")
	public ResponseDTO<?> deleteUser(@PathVariable String email){
		System.out.println("in deleteuserByEmail: "+email);
		try {		
			return new ResponseDTO<>(HttpStatus.OK, "email:  "+email , userService.deleteCustomer(email));
		}catch (RuntimeException e) {
			System.out.println("err in deleting user : "+e); 
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "User not deleted ", null);
		}
	}
}
