package com.app.service;

import java.util.List;

import com.app.pojos.Specifications;

public interface ISpecsService {
     
	//ADMIN---> add specifications
	String addAllSpecs(Specifications newSpecs);
	
	//ADMIN--->get list of Specifications
	List<Specifications> getAllSpecifications();
	
	//find Specification by Id
	Specifications findSpecsOfMobile(int specId);
	
	//delete specification for selected mobile
	String deleteSpecification(int specId);
}
