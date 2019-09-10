package rs.levi9.library.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "category")
public class Category extends BaseEntity implements Serializable {

    private static final long serialVersionUID =  4158644582718832402L;

    @Length(min=3, max=51)
    @Column(name="name", nullable = false, unique = true)
    private String name;

    public Category(String name) {
        this.name = name;
    }

    public Category() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
