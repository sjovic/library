package com.book.order.repository;

import com.book.order.domain.Order;

import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Serializable> {
    
}
