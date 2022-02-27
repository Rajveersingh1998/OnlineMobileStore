package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.dto.LoginRequest;
import com.app.pojos.Role;
import com.app.pojos.Users;

@Service
@Transactional
public class UsersServiceImpl implements IUsersService{
	
	//D.I
	@Autowired
	private UserRepository userRepo;
	
	//BL
	//Authenticate Admin
	@Override
	public Users authenticateUser(LoginRequest loginRequest) {		
	   return userRepo.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword())
			                 .orElseThrow(() -> new RuntimeException("User ID not found!!!!"));
	}

	//get all customers
	@Override
	public List<Users> getAllCustomers() {
		
		return userRepo.findByRole(Role.CUSTOMER);
	}
	
	
	
}
