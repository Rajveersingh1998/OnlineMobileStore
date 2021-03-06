package com.app.dao;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Role;
import com.app.pojos.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {

	
	@Query("select u from Users u where u.email=:em and u.password=:pass")
	Optional<Users> authenticateUser(@Param("em")String em, @Param("pass")String pass);
	
	@Query("select u.role from Users u where u.email=?1")
	Role findRoleById(String emailId);
	//get all customers
	List<Users> findByRole(Role role);
	
	//ADMIN--->delete customer by email id
	 void deleteByEmail(String emailId);
	
	 ////CUSTOMER----->Registering new user
	 Users save(Users user);
	 
	 Optional<Users> findByEmail(String emailId);
	 
	 @Query("select u.password from Users u where u.email=?1")
	 String getUserPass(String email);
}
