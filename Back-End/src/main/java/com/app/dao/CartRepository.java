package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Cart;
import com.app.pojos.Mobiles;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer>{

	
	
	@Query("select c from Cart c join fetch c.userId where c.userId.id=:uid")
	List<Cart> findByUserId(@Param("uid") int uid);
}
