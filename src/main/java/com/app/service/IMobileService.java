package com.app.service;

import java.util.List;

import com.app.dto.MobileDTO;
import com.app.pojos.Mobiles;

public interface IMobileService {

	//get all mobiles available
	List<Mobiles> getAvailiableMobiles();
	
	//save mobile
	String addMobile(Mobiles newMob);
	
	//getMobile by ID
	Mobiles getMobileById(int mid);
	
	//update mobile
	Mobiles updateMobilePrice(double price,int mid);
	
	//delete Mobile by id
	String deleteMobile(int mobileId);
	
	//get all Best selling Mobiles
	List<Mobiles> getAllBestSellingMobiles();
	
	//get all Upcoming Mobiles
	//List<MobileDTO> getAllUpcomingMobiles();
	
	//get all trending Mobiles
	//List<MobileDTO> getAllTrendingMobiles();
}
