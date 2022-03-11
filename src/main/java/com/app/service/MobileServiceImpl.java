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
	public Mobiles updateMobilePrice(double price, int mid) {
		
		Optional<Mobiles> mobile = mobileRepo.findById(mid);
		if(mobile.isPresent()) {
			 
			mobileRepo.updateMobilePrice( price,mid);
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


//	@Override
//	public List<MobileDTO> getAllUpcomingMobiles() {
//		// TODO Auto-generated method stub
//		return null;
//	}


//	@Override
//	public List<MobileDTO> getAllTrendingMobiles() {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
	
	
	
}
