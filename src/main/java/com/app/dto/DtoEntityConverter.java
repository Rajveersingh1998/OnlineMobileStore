package com.app.dto;

import org.springframework.stereotype.Component;

import com.app.pojos.Address;
import com.app.pojos.Role;
import com.app.pojos.Users;


@Component
public class DtoEntityConverter {

   // private final PasswordAuthentication passwordAuthentication = new PasswordAuthentication();
	 
	public Address userAddress(UserDTO dto) {
		Address address = new Address();
		address.setCity(dto.getUcity());
		address.setPincode(dto.getPincode());
		address.setState(dto.getUstate());
		address.setUlocality(dto.getUlocality());
		
		return address;
	}
	
	public Users toUserEntity(UserDTO dto,Address address) {
		System.out.println("in convertor");
		Users entity = new Users();
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		//String hashpwd = passwordAuthentication.hash(dto.getPassword().toCharArray());
		//System.out.println(hashpwd);
		entity.setPassword(dto.getPassword());
		entity.setAddress(address);
		entity.setMobileNo(dto.getUserMob());
		entity.setRole(Role.CUSTOMER);
		
		return entity;
	}



}
