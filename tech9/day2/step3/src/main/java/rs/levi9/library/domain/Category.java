package rs.levi9.library.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "category")
public class Category extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 4158644582718832402L;

    @Column(nullable = false, unique = true)
    private String name;

    public Category() {

    }

    public Category(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
