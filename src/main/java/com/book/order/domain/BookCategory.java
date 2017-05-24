package com.book.order.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.Pattern;
	
@Entity(name = "book_category")
public class BookCategory extends CoreObject {

    private static final long serialVersionUID = 4158644582718832402L;
    
    @Pattern(regexp = "^(?=\\s*\\S).*$")
    @Column(nullable = false, length = 255)
    private String name;

    public String getName() {
            return name;
    }

    public void setName(String name) {
            this.name = name;
    }	
    
}
