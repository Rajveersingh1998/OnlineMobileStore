package com.app.dao;


import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class MobileDaoLayerTest {

	@Autowired
	private MobileRepository mobRepo;
	
	
	@Test
	@Transactional
	@Rollback(value = false)
	void testUpdateMobilePrice() {
	    assertEquals(1,mobRepo.updateMobilePrice(2000, 6, "trending"));	
	}
	
}
