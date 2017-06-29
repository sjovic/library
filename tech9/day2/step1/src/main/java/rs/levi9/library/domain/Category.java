package rs.levi9.library.domain;

import java.io.Serializable;

public class Category extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 4158644582718832402L;

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
