package rs.levi9.library.web.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Book findOne(@PathVariable("id") Long id) {
        return bookService.findOne(id);
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public Book save(@RequestBody Book book) {
        return bookService.save(book);
    }
    
    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) {
        bookService.delete(id);
    }
    
    @RequestMapping(method = RequestMethod.PUT)
    public Book update(@RequestBody Book book) {
        return bookService.save(book);
    }
    
}
