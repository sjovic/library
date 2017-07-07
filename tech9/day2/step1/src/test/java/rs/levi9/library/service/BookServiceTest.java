package rs.levi9.library.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import rs.levi9.library.domain.Book;
import rs.levi9.library.domain.Category;
import rs.levi9.library.repository.BookRepository;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class BookServiceTest {

    @Autowired
    @Qualifier(value = "inMemoryBookRepository")
    private BookRepository bookRepository;

    private BookService bookService;

    @Before
    public void setUp() {
        bookService = new BookService(bookRepository);
        Category categoryProgramming = new Category();
        categoryProgramming.setId(1L);
        categoryProgramming.setName("Java Programming");

        Book book1 = new Book();
        book1.setId(1L);
        book1.setTitle("Spring in Action 4");
        book1.setAuthor("Craig Walls");
        book1.setIsbn("9781617291203");
        book1.setCategory(categoryProgramming);
        book1.setPublishDate(new Date());
        bookService.save(book1);

        Book book2 = new Book();
        book2.setId(2L);
        book2.setTitle("Spring in Practice");
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
        bookService.delete(1L);
        bookService.findOne(1L);
    }

}
