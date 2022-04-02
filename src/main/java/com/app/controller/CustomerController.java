package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.dto.LoginRequest;
import com.app.dto.OrderDTO;
import com.app.dto.PaymentDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Brands;
import com.app.pojos.Cart;
import com.app.pojos.Mobiles;
import com.app.pojos.OrderDetails;
import com.app.pojos.Payment;
import com.app.pojos.Role;
import com.app.pojos.Specifications;
import com.app.pojos.Users;
import com.app.service.IBrandService;
import com.app.service.IEmailSenderService;
import com.app.service.IMobileService;
import com.app.service.IUsersService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/customer")
public class CustomerController {

	
	//Dependency injection
	@Autowired
	private IUsersService userService;
	@Autowired
	private IBrandService brandService;
	@Autowired
	private IMobileService mobileService;
	
	
	@PostMapping("/signin")
	public ResponseDTO<?> authenticateUser(@RequestBody LoginRequest loginRequest){
		System.out.println("in authenticateUser: "+loginRequest);
		try {	
			if(userService.findRole(loginRequest.getEmail()).toString().toUpperCase().equals(loginRequest.getRole().toString().toUpperCase())) {
			Users u = userService.authenticateUser(loginRequest);
			System.out.println("Users : "+u);
			return new ResponseDTO<>(HttpStatus.OK, "login sucessfully", u);
			}else
				return new ResponseDTO<>(HttpStatus.NOT_FOUND, "login sucessfully", null);
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
		System.out.println(newOrder.getMid());
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

			return new ResponseDTO<>(HttpStatus.OK, "Orderplaced sucessfully",orderId );
			}else {
				return new ResponseDTO<>(HttpStatus.SERVICE_UNAVAILABLE, "ERROR",null);
			}
		
		}catch(RuntimeException e) {
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, " !!ERROR'", null);
		}
				
	}
	
	@PostMapping("/payment")
    public ResponseDTO<?> payment(@RequestBody PaymentDTO newPayment) throws MailException, InterruptedException{
		
		System.out.println("in payment method");
		System.out.println(newPayment.getUid());
		try {
			Users isExist = userService.getUserByID(newPayment.getUid());
			OrderDetails isPresent = userService.getOrderByID(newPayment.getOid()); 
			if(isExist != null) {
				System.out.println(isExist.getEmail());
			   
               Payment pay = new Payment();
               pay.setAccHolderName(newPayment.getAccHolderName());
               pay.setCardNumber(newPayment.getCardNumber());
               pay.setTotalAmt(newPayment.getAmount());
               pay.setUserId(isExist);
               pay.setOrder(isPresent);
               System.out.println(pay);
               
               userService.payment(pay);
//   			emailService.sendSimpleEmail(isExist.getEmail(), "Wooohoooooo!!! Your Order Placed SucessFully", "orderplaced");
			return new ResponseDTO<>(HttpStatus.OK, "Payment Done sucessfully",isExist);
			}else {
				return new ResponseDTO<>(HttpStatus.SERVICE_UNAVAILABLE, "ERROR",null);
			}
		
		}catch(RuntimeException e) {
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, " !!ERROR'", null);
		}
				
	}
	
	
	@PostMapping("/addToCart")
public ResponseDTO<?> addToCart(@RequestBody CartDTO item) {
		
		System.out.println("in addToCart");
		System.out.println(item.getUid());
		try {
			Users isExist = userService.getUserByID(item.getUid());
		    Brands isPresent = brandService.findBrandBYId(item.getBid());
		    Mobiles isAvailable = mobileService.getMobileById(item.getMid());
			if(isExist != null) {
				Cart newCart = new Cart();
				newCart.setTotalAmt(item.getAmount());
				newCart.setQty(item.getQty());
				newCart.setBrandId(isPresent);
				newCart.setMobileId(isAvailable);
				newCart.setUserId(isExist);
				newCart.setRam(item.getRam());
				newCart.setStorage(item.getStorage());
             
               Cart addedItemDetails = userService.addItemToUsersCart(newCart);
               
			return new ResponseDTO<>(HttpStatus.OK, "Item Added SucessFully",addedItemDetails);
			}else {
				return new ResponseDTO<>(HttpStatus.SERVICE_UNAVAILABLE, "ERROR",null);
			}
		
		}catch(RuntimeException e) {
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, " !!ERROR'", null);
		}
				
	}
	
	@GetMapping("/cartItems/{userId}")
	public ResponseDTO<?> getCartItems(@PathVariable int userId){
		System.out.println("in getCartItems");
		try {	
			
			return  new ResponseDTO<>(HttpStatus.OK, "All Cart Items",userService.getUserCartItems(userId));
		}catch (RuntimeException e) {
			System.out.println("err in getAllMobiles : "+e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "ERROR", null);
		}
	}
	
	@DeleteMapping("/cart/{productId}")
	public ResponseDTO<?> itemRemoveFromCart(@PathVariable int productId){
				  System.out.println("in itemRemoveFromCart");
		try {
				
				return new ResponseDTO<>(HttpStatus.OK,"Product with id :"+productId +" Deleted Sucessfully", userService.removeItemFromCart(productId));
								
		}catch (RuntimeException e) {
			System.out.println("err in deleting from cart : "+e); 
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "deletion Failed", null);
		}
	}
}
