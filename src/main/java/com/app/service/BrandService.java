package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BrandRepository;
import com.app.dao.MobileRepository;
import com.app.pojos.Brands;
import com.app.pojos.Mobiles;

@Service
@Transactional
public class BrandService implements IBrandService {

	@Autowired
	private BrandRepository brandRepo;
	
	@Autowired
	private MobileRepository mobileRepo;
	
	@Override
	public String addBrand(Brands brd) {
		
	     brandRepo.save(brd);		
		return "details saved sucessfully";
	}


	@Override
	public List<Brands> getAllBrands() {
		
		return brandRepo.findAll();
	}


	@Override
	public Brands findBrandBYId(int brandid) {
		
		Optional<Brands> brand = brandRepo.findById(brandid);
		
	     return brand.orElseThrow();
	}


	@Override
	public String updateBrand(int bid, String bthumb) {
		
		brandRepo.updateBrand(bthumb, bid);
		
		return "Brand Updated Sucessfully";
	}


	
}
