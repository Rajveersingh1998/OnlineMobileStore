package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart extends BaseEntity{
    
	@Column(name="totalAmount")
	private double totalAmt;
	
	@Column(name="quantity")
	private int qty;

	@Column(name="RAM", length = 20)
	private String ram;
	
	@Column(name="storage", length = 20)
	private String storage;
	
	@ManyToOne(optional = true,targetEntity = Users.class)
	@JoinColumn(name = "user_id",nullable = false )//=> NOT NULL constraint
	private Users userId;
	
	@ManyToOne(optional = true,targetEntity = Brands.class)
	@JoinColumn(name = "brand_id",nullable = false )//=> NOT NULL constraint
	private Brands brandId;
	
	@ManyToOne(optional = true,targetEntity = Mobiles.class)
	@JoinColumn(name = "mobile_id",nullable = false )//=> NOT NULL constraint
	private Mobiles mobileId;
	
	
	
	public Cart() {
		super();
	}


public Cart(double totalAmt, int qty, String ram, String storage) {
		super();
		this.totalAmt = totalAmt;
		this.qty = qty;
		this.ram = ram;
		this.storage = storage;
	}



public double getTotalAmt() {
	return totalAmt;
}


public void setTotalAmt(double totalAmt) {
	this.totalAmt = totalAmt;
}


public int getQty() {
	return qty;
}


public void setQty(int qty) {
	this.qty = qty;
}


public Users getUserId() {
	return userId;
}


public void setUserId(Users userId) {
	this.userId = userId;
}


public Brands getBrandId() {
	return brandId;
}


public void setBrandId(Brands brandId) {
	this.brandId = brandId;
}


public Mobiles getMobileId() {
	return mobileId;
}


public void setMobileId(Mobiles mobileId) {
	this.mobileId = mobileId;
}


public String getRam() {
	return ram;
}


public void setRam(String ram) {
	this.ram = ram;
}


public String getStorage() {
	return storage;
}


public void setStorage(String storage) {
	this.storage = storage;
}


@Override
public String toString() {
	return "Cart [totalAmt=" + totalAmt + ", qty=" + qty + "]";
}
	
	
}
