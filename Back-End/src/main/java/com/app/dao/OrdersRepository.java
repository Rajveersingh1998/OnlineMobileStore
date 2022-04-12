package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.OrderDetails;

@Repository
public interface OrdersRepository extends JpaRepository<OrderDetails, Integer>{

}
