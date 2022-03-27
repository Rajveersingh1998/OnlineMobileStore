package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment extends BaseEntity{


    //@MapsId
    @OneToOne
    @JoinColumn(name = "order_id")
    private OrderDetails order;

    @Column(name = "accountHolderName")
    private String accHolderName;
    
    @Column(name = "CardNumber")
    private int cardNumber;
    
    @ManyToOne(optional = true,targetEntity = Users.class)
	@JoinColumn(name = "user_Id",nullable = false )
	private Users userId;
    
    @Column(name = "totalAmount")
    private double totalAmt;

    public Payment() {
	super();
    }

    public Payment( String accHolderName, int cardNumber, double totalAmt) {
    	super();
	
		this.accHolderName = accHolderName;
		this.cardNumber = cardNumber;
		this.totalAmt = totalAmt;
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

public double getTotalAmt() {
	return totalAmt;
}

public void setTotalAmt(double totalAmt) {
	this.totalAmt = totalAmt;
}

public OrderDetails getOrder() {
	return order;
}

public void setOrder(OrderDetails order) {
	this.order = order;
}

public Users getUserId() {
	return userId;
}

public void setUserId(Users userId) {
	this.userId = userId;
}

@Override
public String toString() {
	return "Payment [accHolderName=" + accHolderName + ", CardNumber=" + cardNumber + ", totalAmt="
			+ totalAmt + "]";
}
    
    
}
