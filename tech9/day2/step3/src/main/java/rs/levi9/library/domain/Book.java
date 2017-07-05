package rs.levi9.library.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "book")
public class Book extends BaseEntity implements Serializable {
    
    public static final long serialVersionUID = 5128632882797623323L;
    
    @NotNull
    @Column(nullable = false, unique = true)
    private String isbn;
    
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
    
    @NotNull
    @Length(min = 2, max = 100)
    @Column(nullable = false)
    private String name;
    
    @NotNull
    @Column(nullable = false)
    private String author;
    
    @NotNull
    @Past
    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date publishDate;
    
    
    public Book() {
        
    }

    public Book(String isbn, Category category, String name, String author, Date publishDate) {
        this.isbn = isbn;
        this.name = name;
        this.author = author;
        this.publishDate = publishDate;
        this.category = category;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

}
