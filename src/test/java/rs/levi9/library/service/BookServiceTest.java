package rs.levi9.library.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import rs.levi9.library.domain.Book;
import rs.levi9.library.repository.BookRepository;

@RunWith(MockitoJUnitRunner.class)
public class BookServiceTest {
	
	@InjectMocks
	BookService bookService;
	
	@Mock
	BookRepository bookRepository;
	
	@Test
	public void shouldSaveBook(){
		Book book = new Book();
		book.setName("Book Name");
		
		when(bookRepository.save(book)).thenReturn(book);
		
		Book savedCategory = bookService.save(book);
		
		assertNotNull(savedCategory);
		assertEquals(savedCategory.getName(), "Book Name");
    }

}
