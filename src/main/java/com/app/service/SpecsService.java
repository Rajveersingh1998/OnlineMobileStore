package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.SpecRepository;
import com.app.pojos.Mobiles;
import com.app.pojos.Specifications;

@Service
@Transactional
public class SpecsService implements ISpecsService {

	@Autowired
	private SpecRepository specsRepo;
	
	@Override
	public String addAllSpecs(Specifications newSpecs) {
		
		specsRepo.save(newSpecs);
		return "Specs Sucessfully saved";
	}

	@Override
	public List<Specifications> getAllSpecifications() {
		
		return specsRepo.findAll();
	}

	@Override
	public Specifications findSpecsOfMobile(int specId) {
		
		Optional<Specifications> specs = specsRepo.findById(specId);
	
		return specs.orElseThrow(()-> new RuntimeException("Specification not found "));		
	}

	@Override
	public String deleteSpecification(int specId) {
	
		specsRepo.deleteById(specId);
		return "Specification deleted sucessfully";
	}
 
	
	
}
