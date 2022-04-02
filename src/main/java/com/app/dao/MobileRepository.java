package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Mobiles;

@Repository
public interface MobileRepository extends JpaRepository<Mobiles, Integer>{
    
	List<Mobiles> findAll();
	
	//update selected mobile	
	@Modifying
	@Query("update Mobiles m set m.price =:price, m.flag=:tag where m.id =:mid")
    void updateMobilePrice(@Param("price") double price ,@Param("mid") int mid,@Param("tag") String tag);
	
	
	//get mobile image,color,price,name and id	
	@Query("select new com.app.pojos.Mobiles(id,mobName,mobColor,mobImage,price) from Mobiles m where m.flag=:tag")
	List<Mobiles> getAllMobilesByFlag(String tag);
	
	
	//get all mobiles of selective brand
	@Query("select m from Mobiles m join fetch m.chosenBrand where m.chosenBrand.id=:brandId")
	List<Mobiles> getAllMobilesByBrandId(@Param("brandId")int brandId);
	
	
}
