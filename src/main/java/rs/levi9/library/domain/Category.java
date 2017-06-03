package rs.levi9.library.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;
	
@Entity
@Table(name = "category")
public class Category extends CoreObject implements Serializable {

    private static final long serialVersionUID = 4158644582718832402L;
    
    @Column(nullable = false, length = 255)
    @Pattern(regexp = "^(?=\\s*\\S).*$")
    private String name;
    
    public Category() {
    	
    }
    
    public Category(String name){
    	this.name = name;
    }

    public String getName() {
            return name;
    }

    public void setName(String name) {
            this.name = name;
    }

}
