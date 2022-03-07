package com.app.service;

import java.util.List;

import com.app.pojos.Mobiles;

public interface IMobileService {

	//get all mobiles available
	List<Mobiles> getAvailiableMobiles();
	
	//save mobile
	String addMobile(Mobiles newMob);
}
