package rs.levi9.library.domain;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "book")
public class Book extends CoreObject implements Serializable {
    
    public static final long serialVersionUID = 5128632882797623323L;
    
    @Column(nullable = false, unique = true)
    private String isbn;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String author;
    
    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date publishDate;
    
    private int numberOfPages;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
    
    public Book() {
        
    }

    public Book(String isbn, String name, String author, Date publishDate, int numberOfPages, Category category) {
        this.isbn = isbn;
        this.name = name;
        this.author = author;
        this.publishDate = publishDate;
        this.numberOfPages = numberOfPages;
        this.category = category;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
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

    public int getNumberOfPages() {
        return numberOfPages;
    }

    public void setNumberOfPages(int numberOfPages) {
        this.numberOfPages = numberOfPages;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
