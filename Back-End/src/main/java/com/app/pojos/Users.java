package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="users")
public class Users extends BaseEntity{

	  @Column(name="firstName",length=30,nullable = false)
	  @JsonProperty("fname")
	  private String firstName;
	  @Column(name="lastName",length=30,nullable = false)
	  @JsonProperty("lname")
	  private String lastName;
	  @Column(name="email" ,length=30 ,unique = true,nullable = false)
	  @JsonProperty("email")
	  private String email;
	  @Column(name="mobileNo" , nullable = false)
	  @JsonProperty("umob")
	  private String mobileNo;
	  @Column(name="password", nullable = false)
	  @JsonIgnore
	  private String password;
	  
	  @Enumerated(EnumType.STRING)
	  @Column(length = 20 ,nullable = false)
	  @JsonIgnore
	  private Role role;
	  
	  @OneToOne(cascade=CascadeType.ALL,orphanRemoval=true)
	  @JoinColumn(name="user_adr",nullable = false)
	  private Address address;
	  
	  
	    @OneToMany(mappedBy="userOrder",cascade = CascadeType.ALL,orphanRemoval=true)
		@JsonIgnore
		private List<OrderDetails> OrderDetails=new ArrayList<>();
	    
	    @OneToMany(mappedBy="userId",cascade = CascadeType.ALL,orphanRemoval=true)
		@JsonIgnore
		private List<Payment> payments=new ArrayList<>();
	    
	    @OneToMany(mappedBy="userId",cascade = CascadeType.ALL,orphanRemoval=true)
		@JsonIgnore
		private List<Cart> userCart=new ArrayList<>();
	  
	public Users() {
		
	}


	public Users(String firstName, String lastName, String email, String mobileNo, String password, Role role,
			Address address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
		this.role = role;
		this.address = address;
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


	public String getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
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


	public Address getAddress() {
		return address;
	}


	public void setAddress(Address address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Users [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", mobileNo="
				+ mobileNo + ", password=" + password + ", role=" + role + "]";
	}
	  
	  
	  
}
