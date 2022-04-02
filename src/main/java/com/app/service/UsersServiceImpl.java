package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressRepository;
import com.app.dao.CartRepository;
import com.app.dao.OrdersRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dto.DtoEntityConverter;
import com.app.dto.LoginRequest;
import com.app.dto.OrderDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.Cart;
import com.app.pojos.OrderDetails;
import com.app.pojos.Payment;
import com.app.pojos.Role;
import com.app.pojos.Users;


@Service
@Transactional
public class UsersServiceImpl implements IUsersService{
	
	//D.I
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private AddressRepository adrRepo;
	@Autowired
	private OrdersRepository orderRepo;
	@Autowired
	private PaymentRepository paymentRepo;
	@Autowired
	private CartRepository cartRepo;
	
	//BL
	//Authenticate Admin
	@Override
	public Users authenticateUser(LoginRequest loginRequest) {		
	   return userRepo.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword())
			                 .orElseThrow(() -> new RuntimeException("User ID not found!!!!"));
	}

	
	@Override
	public Role findRole(String emailId) {
		
		return userRepo.findRoleById(emailId);
	}


	//ADMIN--->get all customers
	@Override
	public List<Users> getAllCustomers() {
		
		return userRepo.findByRole(Role.CUSTOMER);
	}

	//ADMIN--->delete customer by email id
	@Override
	public String deleteCustomer(String emailId) {
		userRepo.deleteByEmail(emailId);
		return "Customer deleted Sucessfully";
	}

	//CUSTOMER----->Registering new user
	@Override
	public String saveUser(UserDTO userDto) {
		
		Optional<Users> userExist = userRepo.findByEmail(userDto.getEmail());
		if(userExist.isPresent()) {
			throw new RuntimeException("Email Already Exist");
		}
		Address adr = converter.userAddress(userDto);	
		adrRepo.save(adr);	
		
		Users user= converter.toUserEntity(userDto, adr);
		userRepo.save(user);	
	
		return user.getEmail();
	}

	@Override
	public Users getUserByID(int uid) {
		
		return userRepo.findById(uid).orElseThrow(()-> new RuntimeException("Error in get user by ID"+uid));
	}
	
	

	@Override
	public OrderDetails getOrderByID(int oid) {
		
		return orderRepo.findById(oid).orElseThrow(()-> new RuntimeException("Error in get order by ID"+oid));
	}

	@Override
	public int saveOrderDetails(OrderDetails newOrder) {
		
		if(orderRepo.save(newOrder)!= null) {
			return newOrder.getId();
		}
		
		return 0;
	}

	@Override
	public void payment(Payment newPayment) {
		System.out.println("in service payment method");
		try {
		paymentRepo.save(newPayment);
		
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	@Override
	public Cart addItemToUsersCart(Cart newCart) {
		
		return cartRepo.save(newCart);
	}

	@Override
	public List<Cart> getUserCartItems(int uid) {
		
		return cartRepo.findByUserId(uid);
	}

	@Override
	public String removeItemFromCart(int productId) {
		
		cartRepo.deleteById(productId);
		return "Item Removed Sucessfully";
	}
	
	
	
	
}
