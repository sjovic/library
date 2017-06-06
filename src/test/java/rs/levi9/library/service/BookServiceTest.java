package rs.levi9.library.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import rs.levi9.library.domain.Book;
import rs.levi9.library.domain.Category;
import rs.levi9.library.repository.BookRepository;

@RunWith(MockitoJUnitRunner.class)
public class BookServiceTest {
	
	@InjectMocks
	BookService bookService;
	
	@Mock
	BookRepository bookRepository;
	
	private Category category;
	private Book book;
	
	@Before
    public void setUp() throws Exception {
		category = new Category();
		category.setId(1L);
		category.setName("Java");
		
		book = new Book();
		book.setId(1L);
		book.setCategory(category);
		book.setName("Thinking in java");
		book.setNumberOfPages(445);
		book.setAuthor("Bruce Eckel");
		book.setPublishDate(new Date());
		book.setIsbn("8175257660");
	}
	
	@Test
	public void shouldSaveBook(){
		
		when(bookRepository.save(book)).thenReturn(book);
		
		Book savedCategory = bookService.save(book);
		
		assertNotNull(savedCategory);
		assertEquals(savedCategory.getName(), "Thinking in java");
		
		verify(bookRepository, times(1)).save(book);
    }

}
