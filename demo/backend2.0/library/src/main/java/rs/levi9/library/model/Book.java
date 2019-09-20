package rs.levi9.library.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import rs.levi9.library.web.validatior.Isbn13;

import javax.persistence.*;
import javax.validation.constraints.Past;
import java.io.Serializable;
import java.util.Date;


@Entity
@Table(name = "book")
@EntityListeners(AuditingEntityListener.class)
public class Book extends BaseEntity implements Serializable {

    private static final long serialVersionUID =  4158644582718832402L;

    @Length(min=3, max=51)
    @Column(name = "title", nullable = false)
    private String title;

    @Length(min=3, max=51)
    @Column(name = "author", nullable = false)
    private String author;

    @Isbn13
    @Column(name = "isbn", nullable = false)
    private String isbn;

    @Past
    @Column(name = "publish_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date publishDate;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    public Book() {
    }

    public Book(@JsonProperty("title") String title,@JsonProperty("author") String author,@JsonProperty("isbn") String isbn,@JsonProperty("publishDate") Date publishDate,@JsonProperty("category") Category category) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publishDate = publishDate;
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getIsbn() {
        return isbn;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public Category getCategory() {
        return category;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public void setPublishDate(Date publishDate) {
        publishDate = publishDate;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", isbn='" + isbn + '\'' +
                ", publishDate=" + publishDate +
                ", category=" + category +
                '}';
    }
}
