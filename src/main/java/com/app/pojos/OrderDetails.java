package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="orderdetails")
public class OrderDetails extends BaseEntity{

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate orderDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate deliveryDate;
	
	private double totalPrice;
	
	@ManyToOne(optional = true,targetEntity = Users.class)
	@JoinColumn(name = "User_Id",nullable = false )
	private Users userOrder;
	
	private int mobileId;
	
	public OrderDetails() {
		super();
	}


	public OrderDetails(LocalDate orderDate, LocalDate deliveryDate, double totalPrice, Users userOrder, int mobileId) {
		super();
		this.orderDate = orderDate;
		this.deliveryDate = deliveryDate;
		this.totalPrice = totalPrice;
		this.userOrder = userOrder;
		this.mobileId = mobileId;
	}


//	public OrderDetails(LocalDate orderDate, LocalDate deliveryDate, double totalPrice, int mobileId) {
//		super();
//		this.orderDate = orderDate;
//		this.deliveryDate = deliveryDate;
//		this.totalPrice = totalPrice;
//		this.mobileId=mobileId;
//	}


	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public LocalDate getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(LocalDate deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Users getUserOrder() {
		return userOrder;
	}


	public void setUserOrder(Users userOrder) {
		this.userOrder = userOrder;
	}


	@Override
	public String toString() {
		return "OrderDetails [orderDate=" + orderDate + ", deliveryDate=" + deliveryDate + ", totalPrice=" + totalPrice
				+ "]";
	}


	public int getMobileId() {
		return mobileId;
	}


	public void setMobileId(int mobileId) {
		this.mobileId = mobileId;
	}
	

	
	
	
}
