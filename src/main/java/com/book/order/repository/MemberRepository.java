package com.book.order.repository;

import com.book.order.domain.Member;

import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Serializable> {
    
    public Member findOneByUsername(String username);
    
}
