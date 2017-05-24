package com.book.order.model.dto;

import com.book.order.domain.BookCategory;

import java.util.List;
import javax.validation.constraints.NotNull;
import org.jtransfo.DomainClass;

@DomainClass(domainClass = BookCategory.class)
public class BookCategoryDTO extends BaseDetail {
    
    /**
	 * 
	 */
	private static final long serialVersionUID = -9015337018188387295L;


	@NotNull
    private String name;
    
    public BookCategoryDTO() {
        
    }

    public String getName() {
        return name;
    }
    
    public void setName(String name) {
    	this.name = name;
    }  
}
