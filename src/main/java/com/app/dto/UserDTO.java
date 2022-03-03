package com.app.dto;

public class UserDTO {
	
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String userMob;
	private String ulocality;
	private String ucity;
	private String ustate;
	private int pincode;
	//private String role;
	
	
	
	public UserDTO() {
	
	}

	public UserDTO(String firstName, String lastName, String email, String password, String userMob, String ulocality,
			String ucity, String ustate, int pincode) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.userMob = userMob;
		this.ulocality = ulocality;
		this.ucity = ucity;
		this.ustate = ustate;
		this.pincode = pincode;
		//this.role = role;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserMob() {
		return userMob;
	}

	public void setUserMob(String userMob) {
		this.userMob = userMob;
	}

	public String getUlocality() {
		return ulocality;
	}

	public void setUlocality(String ulocality) {
		this.ulocality = ulocality;
	}

	public String getUcity() {
		return ucity;
	}

	public void setUcity(String ucity) {
		this.ucity = ucity;
	}

	public String getUstate() {
		return ustate;
	}

	public void setUstate(String ustate) {
		this.ustate = ustate;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

//	public String getRole() {
//		return role;
//	}
//
//	public void setRole(String role) {
//		this.role = role;
//	}

	@Override
	public String toString() {
		return "UserDTO [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password="
				+ password + ", userMob=" + userMob + ", ulocality=" + ulocality + ", ucity=" + ucity + ", ustate="
				+ ustate + ", pincode=" + pincode + "]";
	}
 
	

}
