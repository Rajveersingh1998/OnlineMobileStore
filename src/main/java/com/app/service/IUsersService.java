package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.pojos.Users;

public interface IUsersService {
  
	//authenticate admin
	Users authenticateUser(LoginRequest loginRequest);
	
	//get all customers
	List<Users> getAllCustomers();
	 
}
