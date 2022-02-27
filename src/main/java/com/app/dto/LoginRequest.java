package com.app.dto;

import javax.persistence.Column;

import com.app.pojos.Role;

public class LoginRequest {
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 20, nullable = false)
	private String password;
	@Column(length = 20 , nullable = false)
	private Role role;
	public LoginRequest() {
	
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
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "LoginRequest [email=" + email + ", password=" + password + ", role=" + role + "]";
	}
	
	
	
	

}
