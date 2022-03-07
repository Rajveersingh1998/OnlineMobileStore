package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Brands;

@Repository
public interface BrandRepository extends JpaRepository<Brands, Integer>{
  
}
