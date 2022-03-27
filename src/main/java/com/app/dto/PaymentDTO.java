package com.app.dto;

public class PaymentDTO {

//	 oid: orderId,
//     accHolderName: accHolderName,
//     cardNumber: cardNumber,
//     uid: isSignin.user.id,
//     amount: totalAmount
	
	private int oid;
	private String accHolderName;
	private int cardNumber;
	private int uid;
	private double amount;
	
	
	public PaymentDTO() {
		super();
	}
	public PaymentDTO(int oid, String accHolderName, int cardNumber, int uid, double amount) {
		super();
		this.oid = oid;
		this.accHolderName = accHolderName;
		this.cardNumber = cardNumber;
		this.uid = uid;
		this.amount = amount;
	}
	public int getOid() {
		return oid;
	}
	public void setOid(int oid) {
		this.oid = oid;
	}
	public String getAccHolderName() {
		return accHolderName;
	}
	public void setAccHolderName(String accHolderName) {
		this.accHolderName = accHolderName;
	}
	public int getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(int cardNumber) {
		this.cardNumber = cardNumber;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "PaymentDTO [oid=" + oid + ", accHolderName=" + accHolderName + ", cardNumber=" + cardNumber + ", uid="
				+ uid + ", amount=" + amount + "]";
	}
	
	
}
