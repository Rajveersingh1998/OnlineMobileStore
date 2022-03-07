package com.app.service;

import java.util.List;


import com.app.pojos.Brands;

public interface IBrandService {

	String addBrand(Brands brd);
	
	List<Brands> getAllBrands();
	
	Brands findBrandBYId(int brandid);
}
                                                                                            