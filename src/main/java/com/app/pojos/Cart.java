package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart extends BaseEntity{
    
	@Column( unique=true)
	private int userId;
	private int mobId;
	private int brandId;
	private int quantity;
	private double amount;
	
	
	public Cart() {
	
	}


	public Cart(int userId, int mobId, int brandId, int quantity, double amount) {
		super();
		this.userId = userId;
		this.mobId = mobId;
		this.brandId = brandId;
		this.quantity = quantity;
		this.amount = amount;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public int getMobId() {
		return mobId;
	}


	public void setMobId(int mobId) {
		this.mobId = mobId;
	}


	public int getBrandId() {
		return brandId;
	}


	public void setBrandId(int brandId) {
		this.brandId = brandId;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public double getAmount() {
		return amount;
	}


	public void setAmount(double amount) {
		this.amount = amount;
	}


	@Override
	public String toString() {
		return "Cart [userId=" + userId + ", mobId=" + mobId + ", brandId=" + brandId + ", quantity=" + quantity
				+ ", amount=" + amount + "]";
	}
	
	
}
