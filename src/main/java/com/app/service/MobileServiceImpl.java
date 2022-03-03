package com.app.service;

import java.util.List;

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

	
	
}
