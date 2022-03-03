package com.app.dto;

import org.springframework.stereotype.Component;

import com.app.pojos.Address;
import com.app.pojos.Role;
import com.app.pojos.Users;

@Component
public class DtoEntityConverter {
//	public UserDTO toUserDto(User entity) {
//		UserDTO dto = new UserDTO();
//		dto.setUserId(entity.getUserId());
//		dto.setFirstName(entity.getFirstName());
//		dto.setLastName(entity.getLastName());
//		dto.setEmail(entity.getEmail());
//		dto.setPassword(entity.getPassword());
//		dto.setPhone(entity.getPhone());
//		dto.setRole(entity.getRole());
//
//		dto.setCityName(entity.getAddress().getCityName());
//		dto.setHouseNo(entity.getAddress().getHouseNo());
//		dto.setStreet(entity.getAddress().getStreet());
//		dto.setPincode(entity.getAddress().getPincode());
//		return dto;
//	}

//	public Users toUserEntity(UserDTO dto) {
//		Users entity = new Users();
//		Address address = new Address();
//		
//		address.setCity(dto.getUcity());
//		address.setPincode(dto.getPincode());
//		address.setState(dto.getUstate());
//		address.setUlocality(dto.getUlocality());
//		
//		
//		
//		entity.setFirstName(dto.getFirstName());
//		entity.setLastName(dto.getLastName());
//		entity.setEmail(dto.getEmail());
//		entity.setPassword(dto.getPassword());
//		entity.setAddress(address);
//		entity.setMobileNo(dto.getUserMob());
//		entity.setRole(Role.CUSTOMER);
//
//		return entity;
//	}
	public Address userAddress(UserDTO dto) {
		Address address = new Address();
		address.setCity(dto.getUcity());
		address.setPincode(dto.getPincode());
		address.setState(dto.getUstate());
		address.setUlocality(dto.getUlocality());
		
		return address;
	}
	
	public Users toUserEntity(UserDTO dto,Address address) {
		Users entity = new Users();
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		entity.setAddress(address);
		entity.setMobileNo(dto.getUserMob());
		entity.setRole(Role.CUSTOMER);
		
		return entity;
	}

//	public Cart toCartEntity(CartDto dto) {
//		Cart entity = new Cart();
//		entity.getProductId();
//		Product product = new Product();
//		product.setProductName(dto.getProductName());
//		entity.setProductId(dto.getProductId());
//		entity.setQuantity(dto.getQuantity());
//		entity.setPrice(dto.getPrice());
//		return entity;
//
//	}

//	public CartDto toCartDto(Product product, Cart cart) {
//		CartDto cartDto = new CartDto();
//
//		cartDto.setProductName(product.getProductName());
//		cartDto.setProductId(product.getProductId());
//		cartDto.setQuantity(cart.getQuantity());
//		cartDto.setPrice(cart.getPrice());
//		cartDto.setCategoryName(product.getCategoryName());
//		cartDto.setDescription(product.getDescription());
//		// cartDto.setImage(product.getImage());
//
//		return cartDto;
//	}

//	public Order toOrderEntity(OrderDto dto) {
//		Order order = new Order();
//		order.setOrderDate(dto.getOrderDate());
//		order.setStatus(dto.getOrderStatus());
//
//		return order;
//	}

//	public OrderDto toOrderDto(Order order, Product product, User user) {
//
//		OrderDto dto = new OrderDto();
//		dto.setOrderId(order.getOrderId());
//		// dto.setOrderDate(order.getOrderDate());
//		dto.setProductName(product.getProductName());
//		dto.setUserId(user.getUserId());
//		dto.setStatus(order.getStatus());
//		dto.setProductId(product.getProductId());
//		return dto;
//
//	}

//	public Product toProductEntity(ProductDto dto) {
//
//		Product entity = new Product();
//
//		entity.setProductId(dto.getProductId());
//		entity.setProductName(dto.getProductName());
//		entity.setCategoryName(dto.getCategoryName());
//		entity.setDescription(dto.getDescription());
//		entity.setThumbnail(dto.getThumbnail());
//		entity.setPrice(dto.getPrice());
//
//		return entity;
//	}

//	public Product ProductFormDtoToEntity(ProductFormDTO productDto) {
//		Product product = new Product();
//		BeanUtils.copyProperties(productDto, product, "thumbnail");
//		if (productDto.getThumbnail() != null)
//			product.setThumbnail(productDto.getThumbnail().getOriginalFilename());
//		return product;
//	}

}
