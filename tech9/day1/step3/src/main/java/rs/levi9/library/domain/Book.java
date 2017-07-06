package rs.levi9.library.domain;

import java.io.Serializable;
import java.util.Date;

public class Book extends BaseEntity implements Serializable {
    
    public static final long serialVersionUID = 5128632882797623323L;
    
    private String isbn;
    private Category category;
    private String title;
    private String author;
    private Date publishDate;
    
    
    public Book() {
        
    }

    public Book(String isbn, Category category, String title, String author, Date publishDate) {
        this.isbn = isbn;
        this.title = title;
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

    public String geTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
