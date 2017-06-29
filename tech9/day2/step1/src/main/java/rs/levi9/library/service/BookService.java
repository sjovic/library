package rs.levi9.library.service;

import java.util.List;
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

    public Book findOne(Long id) {
        return bookRepository.findOne(id);
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public void remove(Long id) throws IllegalArgumentException {
        bookRepository.remove(id);
    }

}
