package rs.levi9.library.service;

import rs.levi9.library.domain.Book;
import rs.levi9.library.repository.BookRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class BookService {
    
    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public Book findOne(Long id) {
        return bookRepository.findOne(id);
    }
    @Transactional
    public Book save(Book book) {
    	
        return bookRepository.save(book);
    }

    public void remove(Long id) throws IllegalArgumentException {
        Book book = bookRepository.findOne(id);
        if (book == null) {
            throw new IllegalArgumentException("book does not exist!");
        }
        bookRepository.delete(book);
    }
}
