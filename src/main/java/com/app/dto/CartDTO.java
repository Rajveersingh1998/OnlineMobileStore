package com.app.dto;

public class CartDTO {

//	 bid: product.mobile.chosenBrand.id,
//     mid: product.mobile.id,
//     qty: quantity,
//     amount: product.mobile.mprice,
//     uid: isSignin.user.id,
	private int amount;
	private int qty;
	private int uid;
	private int mid;
	private int bid;
	private String ram;
	private String storage;
	
	public CartDTO() {
	
	}
	
	public CartDTO(int amount, int qty, int uid, int mid, int bid) {
		super();
		this.amount = amount;
		this.qty = qty;
		this.uid = uid;
		this.mid = mid;
		this.bid = bid;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
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
	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
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
		return "CartDTO [amount=" + amount + ", qty=" + qty + ", uid=" + uid + ", mid=" + mid + ", bid=" + bid + "]";
	}
	
	
}
