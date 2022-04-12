package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.MobileRepository;
import com.app.pojos.Mobiles;

@Service
@Transactional
public class MobileServiceImpl implements IMobileService{

	//dependency injection
	@Autowired
	private MobileRepository mobileRepo;
	
	
	@Override
	public List<Mobiles> getAvailiableMobiles() {
		
		return mobileRepo.findAll();
	}


	@Override
	public String addMobile(Mobiles newMob) {
		
     if(mobileRepo.save(newMob) != null) {
    	 return "Mobile added sucessfully";
     }	 
		return "Cannot add Mobile";
	}

	@Override
	public Mobiles getMobileById(int mid) {
		
		Optional<Mobiles> mobile = mobileRepo.findById(mid);		
		
	    return mobile.orElseThrow(()->  new RuntimeException("Mobile not found"));
	     
	}


	@Override
	public Mobiles updateMobilePrice(double price, int mid,String newTag) {
		
		Optional<Mobiles> mobile = mobileRepo.findById(mid);
		if(mobile.isPresent()) {
			 
			mobileRepo.updateMobilePrice( price,mid,newTag);
		}
		return mobile.orElseThrow(()-> new RuntimeException("Mobile not found Cannot Update"));
	}


	@Override
	public String deleteMobile(int mobileId) {
		
		Optional<Mobiles> mobile = mobileRepo.findById(mobileId);
		if(mobile.isPresent()) {		 
			mobileRepo.deleteById(mobileId);
			return "Mobile Deleted Sucessfully";
		}
		return "Mobile Not Found";
	}


	@Override
	public List<Mobiles> getAllBestSellingMobiles() {
			String bs = "bestSell";
		return mobileRepo.getAllMobilesByFlag(bs);
	}


	@Override
	public List<Mobiles> getAllUpcomingMobiles() {
		  String up="upcoming";
		return mobileRepo.getAllMobilesByFlag(up);
	}


	@Override
	public List<Mobiles> getAllTrendingMobiles() {
		String trend="trending";
		return mobileRepo.getAllMobilesByFlag(trend);
	}

//	public List<Product> getAllProduct(int categoryId) {
//		List<Product> list = productRepo.getAllProduct(categoryId);
//		List<Product> lt = new ArrayList<Product>();
//		int index = 0;
//		for(index = 0; index < list.size(); index++) {
//			Product p = list.get(index);
//			if(p.getQty() > 0)
//				lt.add(p);
//		}
//		return lt;
//	}
	@Override
	public List<Mobiles> getAllMobilesByBrandId(int brandId) {
		List<Mobiles> list = mobileRepo.getAllMobilesByBrandId(brandId);
		
		return list;
		
	}


	
	
	
	
}
