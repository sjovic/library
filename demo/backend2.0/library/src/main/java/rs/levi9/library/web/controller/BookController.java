package rs.levi9.library.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.library.model.Book;
import rs.levi9.library.model.Category;
import rs.levi9.library.service.BookService;
import rs.levi9.library.web.exceptions.ResourceNotFoundException;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 30)
public class BookController {

    private final BookService service;

    @Autowired
    public BookController(BookService service) {
        this.service = service;
    }

    //@PreAuthorize("hasAnyRole('ADMIN_ROLE', 'USER_ROLE')")
    @GetMapping
    @ResponseBody
    public List<Book> getAllBooks() {
        return service.findAll();
    }


    //@PreAuthorize("hasAnyRole('ADMIN_ROLE', 'USER_ROLE')")
    @GetMapping(path = "{id}")
    @ResponseBody
    public ResponseEntity<Book> getBook(@PathVariable("id") Long id) throws ResourceNotFoundException {
        Book ret = service.findOne(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not founded with id: " + id));
        return ResponseEntity.ok().body(ret);
    }

    //@PreAuthorize("hasRole('ADMIN_ROLE')")
    @PostMapping()
    @ResponseBody
    public ResponseEntity<Book> saveBook(@RequestBody Book book) throws ResourceNotFoundException{
        try {
            Book ret = service.save(book);
            return ResponseEntity.ok().body(ret);
        } catch (IllegalArgumentException e) {
            throw  new ResourceNotFoundException("Book with id: " + book.getId()+ " already exist");
        }
    }

    //@PreAuthorize("hasRole('ADMIN_ROLE')")
    @DeleteMapping(path = "{id}")
    public ResponseEntity deleteBook(@PathVariable("id") Long id) throws ResourceNotFoundException{
        try {
            service.delete(id);
            return new ResponseEntity(HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException("Couldn't delete book. Book with id: "+id+" dose not exist");
            //return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

   // @PreAuthorize("hasRole('ADMIN_ROLE')")
    @PutMapping
    @ResponseBody
    public ResponseEntity<Book> updateBook(@RequestBody Book book) throws ResourceNotFoundException{
        try {
            Book ret = service.update(book);
            return ResponseEntity.ok().body(ret);
        } catch (IllegalArgumentException e) {
            throw  new ResourceNotFoundException("Book not founded with id: " + book.getId());
        }
    }

    //@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @GetMapping(path = "/category")
    @ResponseBody
    public List<Book> getBooksByCategory(@RequestBody Category category) throws ResourceNotFoundException{
        try {
            return service.findByCategory(category);
        }catch (IllegalArgumentException e) {
            throw new ResourceNotFoundException("category could not be founded");
        }
    }

}
