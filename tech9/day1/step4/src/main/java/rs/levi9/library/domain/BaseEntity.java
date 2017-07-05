package rs.levi9.library.domain;

public abstract class BaseEntity {
    
    private Long id;
    
    public Long getId() {
        return this.id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
}
