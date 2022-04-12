package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Brands;

@Repository
public interface BrandRepository extends JpaRepository<Brands, Integer>{
  
	//update Brand	
		@Modifying
		@Query("update Brands b set b.brandImage=:img where b.id =:bid")
	   void updateBrand(@Param("img") String img ,@Param("bid") int bid);
}
