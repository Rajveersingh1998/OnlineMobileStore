package com.app.pojos;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

//@Entity
//@Table(name="orderdetails")
public class OrderDetails extends BaseEntity{

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate orderDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate deliveryDate;
	
	
	
}
