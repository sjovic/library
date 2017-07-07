package rs.levi9.library.web.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import rs.levi9.library.domain.Book;
import rs.levi9.library.service.BookService;

@RestController
@RequestMapping("/books")
public class BookController {
    
    private BookService bookService;
    
    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Book> findAll() {
        return bookService.findAll();
    }
    
    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity findOne(@PathVariable("id") Long id) {
        Book book = bookService.findOne(id);
        if (book == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(book, HttpStatus.OK);
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public Book save(@Valid @RequestBody Book book) {
        return bookService.save(book);
    }
    
    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    public ResponseEntity delete(@PathVariable("id") Long id) {
        bookService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
    
    @RequestMapping(method = RequestMethod.PUT)
    public Book put(@Valid @RequestBody Book book) {
        return bookService.save(book);
    }
    
}
