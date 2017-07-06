package rs.levi9.library.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.levi9.library.domain.Book;
import rs.levi9.library.repository.BookRepository;

@Service
public class BookService {

    private BookRepository bookRepository;
    
    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> findAll() {
        return bookRepository.findAll();
    }
    
    public Book edit(Book book) {
        Book newBook = bookRepository.findOne(book.getId());
        newBook.setName(book.getName());
        newBook.setIsbn(book.getIsbn());
        newBook.setAuthor(book.getAuthor());
        System.out.println(book.getPublishDate().toGMTString());
        
        
        DateFormat dateFormat = new SimpleDateFormat("yy-MM-dd");
        String date = book.getPublishDate().toGMTString();
        //Date inputDate = dateFormat.parse(date);
        
        System.out.println(book.getPublishDate());
        
        newBook.setPublishDate(book.getPublishDate());
        newBook.setCategory(book.getCategory());
        return bookRepository.save(newBook);
    }

    public Book findOne(Long id) {
        return bookRepository.findOne(id);
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public void remove(Long id) throws IllegalArgumentException {
        bookRepository.delete(id);
    }

}
