package rs.levi9.library.service;

import org.junit.Before;
import org.junit.Test;
import rs.levi9.library.domain.Book;
import rs.levi9.library.domain.Category;
import rs.levi9.library.repository.BookRepository;
import rs.levi9.library.repository.InMemoryBookRepository;

import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by krle on 04.07.2017
 */

public class BookServiceTest {

    private BookService bookService;

    @Before
    public void setUp() {
        BookRepository bookRepository = new InMemoryBookRepository();
        bookService = new BookService(bookRepository);

        Category categoryProgramming = new Category();
        categoryProgramming.setId(1L);
        categoryProgramming.setName("Java Programming");

        Book book1 = new Book();
        book1.setId(1L);
        book1.setName("Spring in Action 4");
        book1.setAuthor("Craig Walls");
        book1.setIsbn("9781617291203");
        book1.setCategory(categoryProgramming);
        book1.setPublishDate(new Date());
        bookService.save(book1);

        Book book2 = new Book();
        book2.setId(2L);
        book2.setName("Spring in Practice");
        book2.setAuthor("Willie Wheeler");
        book2.setIsbn("9781935182054");
        book2.setPublishDate(new Date());
        book2.setCategory(categoryProgramming);
        bookService.save(book2);
    }

    @Test
    public void should_find_books() {
        List<Book> resultBooks = bookService.findAll();

        assertEquals(2L, resultBooks.size());
    }

    @Test
    public void should_find_one_book() {
        Book resultBook = bookService.findOne(1L);
        assertEquals("Craig Walls", resultBook.getAuthor());
    }

    @Test(expected = IllegalArgumentException.class)
    public void should_remove_book() {
        bookService.remove(1L);
        bookService.findOne(1L);
    }

}
