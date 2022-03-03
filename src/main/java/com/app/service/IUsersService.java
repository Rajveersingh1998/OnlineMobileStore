package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.Users;

public interface IUsersService {
  
	//ADMIN--->authenticate admin
	Users authenticateUser(LoginRequest loginRequest);
	
	//ADMIN--->get all customers
	List<Users> getAllCustomers();
	
	//ADMIN--->delete customer by email id
	String deleteCustomer(String emailId);
	 
	//CUSTOMER----->Registering new user
	String saveUser(UserDTO userDto);
}
