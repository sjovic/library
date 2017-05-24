package com.book.order.model.dto;

import com.book.order.domain.Member;
import com.book.order.domain.enumeration.Role;
import org.jtransfo.DomainClass;

@DomainClass(domainClass = Member.class)
public class MemberDetails {
    
    private String username;
    private String email;
    private String password;
    private Role role;
    
    public MemberDetails (){}
    
    public MemberDetails(String username, String email, String password, Role role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Role getRole() {
        return role;
    }

}
