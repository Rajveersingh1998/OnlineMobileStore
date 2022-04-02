package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.Cart;
import com.app.pojos.OrderDetails;
import com.app.pojos.Payment;
import com.app.pojos.Role;
import com.app.pojos.Users;

public interface IUsersService {
  
	//ADMIN--->authenticate admin
	Users authenticateUser(LoginRequest loginRequest);
	
	//ADMIN--->get all customers
	List<Users> getAllCustomers();
	
	//ADMIN--->delete customer by email id
	String deleteCustomer(String emailId);
	 
	//CUSTOMER----->Registering new user
	String saveUser(UserDTO userDto);
	
	//CUSTOMER----->SaveOrderDetails
	int saveOrderDetails(OrderDetails newOrder);
	
	//CUSTOMER----->Payment
	void payment(Payment newPayment);
	
	//find user by ID
	Users getUserByID(int uid);
	
	//find Order by ID
	OrderDetails getOrderByID(int oid);
	
	//Add item to users Cart
	Cart addItemToUsersCart(Cart newCart);
	
	//get cart Items by userId
	List<Cart> getUserCartItems(int uid);
	
	//delete from cart
	String removeItemFromCart(int productId);
	
	Role findRole(String emailId);
}
