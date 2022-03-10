package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Specifications;

public interface SpecRepository extends JpaRepository<Specifications, Integer>{
  
}
