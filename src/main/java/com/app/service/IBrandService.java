package com.app.service;

import java.util.List;


import com.app.pojos.Brands;
import com.app.pojos.Mobiles;

public interface IBrandService {

	String addBrand(Brands brd);
	
	List<Brands> getAllBrands();
	
	Brands findBrandBYId(int brandid);
	
	String updateBrand(int bid , String bthumb);
	
}
                                                                                            