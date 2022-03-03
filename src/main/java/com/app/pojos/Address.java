package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;



@Entity
@Table(name="address")
public class Address extends BaseEntity{

	@Column(length=20 , name="locality" , nullable=false)
	@JsonProperty("ulocality")
	private String ulocality;
    @Column(length = 20,name="city", nullable= false)
    @JsonProperty("ucity")
    private String city;
    @Column(length = 20 ,name="state", nullable=false)
    @JsonProperty("ustate")
    private String state;
    @Column(length = 10, name ="pincode", nullable=false)
    @JsonProperty("upin")
    private int pincode;
    


	public Address() {
		super();
	}

	public Address(String ulocality, String city, String state, int pincode) {
		super();
		this.ulocality = ulocality;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		//this.user = user;
	}

	public String getUlocality() {
		return ulocality;
	}

	public void setUlocality(String ulocality) {
		this.ulocality = ulocality;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Address [ulocality=" + ulocality + ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}

//	public Users getUser() {
//		return user;
//	}
//
//	public void setUser(Users user) {
//		this.user = user;
//	}
//

    
    
   
}
