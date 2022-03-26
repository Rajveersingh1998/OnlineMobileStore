package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.OrderDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.UserDTO;
import com.app.pojos.OrderDetails;
import com.app.pojos.Users;
import com.app.service.IUsersService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/customer")
public class CustomerController {

	
	//Dependency injection
	@Autowired
	private IUsersService userService;
	
	@PostMapping("/signin")
	public ResponseDTO<?> authenticateUser(@RequestBody LoginRequest loginRequest){
		System.out.println("in authenticateUser: "+loginRequest);
		try {		
			Users u = userService.authenticateUser(loginRequest);
			System.out.println("Users : "+u);
			return new ResponseDTO<>(HttpStatus.OK, "login sucessfully", u);
		}catch (RuntimeException e) {
			System.out.println("err in authenticateUser : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error", null);
		}
	}
	
	@PostMapping("/signup")
	public ResponseDTO<?> signUp(@RequestBody UserDTO userDto) {
		
		System.out.println("in sigup customer");
		try {
		String newUser = userService.saveUser(userDto);
		return new ResponseDTO<>(HttpStatus.OK, "Customer Added sucessfully", newUser);
		}catch(RuntimeException e) {
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Customer Already exist !!ERROR'", null);
		}
				
	}
	
	@PostMapping("/orders")
    public ResponseDTO<?> orderPlaced(@RequestBody OrderDTO newOrder) {
		
		System.out.println("in order placed");
		System.out.println(newOrder.getUid());
		try {
			Users isExist = userService.getUserByID(newOrder.getUid());
			if(isExist != null) {
				OrderDetails newOdr = new OrderDetails();
				newOdr.setDeliveryDate(newOrder.getDdate());
				newOdr.setOrderDate(newOrder.getOdate());
				newOdr.setMobileId(newOrder.getMid());
				newOdr.setTotalPrice(newOrder.getTotalPrice());
				newOdr.setUserOrder(isExist);
			int orderId = userService.saveOrderDetails(newOdr);
			return new ResponseDTO<>(HttpStatus.OK, "Customer Added sucessfully",orderId );
			}else {
				return new ResponseDTO<>(HttpStatus.SERVICE_UNAVAILABLE, "ERROR",null);
			}
		
		}catch(RuntimeException e) {
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, " !!ERROR'", null);
		}
				
	}
	
//	@PostMapping("/orders")
//    public ResponseDTO<?> payment(@RequestBody OrderDTO newOrder) {
//		
//		System.out.println("in order placed");
//		System.out.println(newOrder.getUid());
//		try {
//			Users isExist = userService.getUserByID(newOrder.getUid());
//			if(isExist != null) {
//				OrderDetails newOdr = new OrderDetails();
//				newOdr.setDeliveryDate(newOrder.getDdate());
//				newOdr.setOrderDate(newOrder.getOdate());
//				newOdr.setMobileId(newOrder.getMid());
//				newOdr.setTotalPrice(newOrder.getTotalPrice());
//				newOdr.setUserOrder(isExist);
//			int orderId = userService.saveOrderDetails(newOdr);
//			return new ResponseDTO<>(HttpStatus.OK, "Customer Added sucessfully",orderId );
//			}else {
//				return new ResponseDTO<>(HttpStatus.SERVICE_UNAVAILABLE, "ERROR",null);
//			}
//		
//		}catch(RuntimeException e) {
//			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, " !!ERROR'", null);
//		}
//				
//	}
	
}
