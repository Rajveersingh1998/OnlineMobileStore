package com.app.dto;

import java.time.LocalDate;

public class OrderDTO {

//	 odate: orderdetails.orderdate,
//     totalPrice: totalAmount,
//     uid: isSignin.user.id,
//     mid: orderdetails.mid,
//     ddate: orderdetails.deliverydate,
	
	private LocalDate odate;
	private double totalPrice;
	private int uid;
	private int mid;
	private LocalDate ddate;
	
	public OrderDTO() {
		super();
	}

	public OrderDTO(LocalDate odate, double totalPrice, int uid, int mid, LocalDate ddate) {
		super();
		this.odate = odate;
		this.totalPrice = totalPrice;
		this.uid = uid;
		this.mid = mid;
		this.ddate = ddate;
	}

	public LocalDate getOdate() {
		return odate;
	}

	public void setOdate(LocalDate odate) {
		this.odate = odate;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public LocalDate getDdate() {
		return ddate;
	}

	public void setDdate(LocalDate ddate) {
		this.ddate = ddate;
	}

	@Override
	public String toString() {
		return "OrderDTO [odate=" + odate + ", totalPrice=" + totalPrice + ", uid=" + uid + ", mid=" + mid + ", ddate="
				+ ddate + "]";
	}
	
	
}
