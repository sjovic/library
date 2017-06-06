package rs.levi9.library.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.ResponseEntity;

import rs.levi9.library.domain.Category;
import rs.levi9.library.service.CategoryService;

@RunWith(MockitoJUnitRunner.class)
public class CategoryControllerTest {
	
	@InjectMocks
	private CategoryController categoryController;
	
	@Mock
	private CategoryService categoryService;
	
	private Category category;
	
	@Before
    public void setUp() throws Exception {
		category = new Category();
		category.setId(1L);
		category.setName("Java");
	}
	
	@Test
	public void shouldFindOneCategory(){
		
	    when(categoryService.findOne(1L)).thenReturn(category);

	    ResponseEntity<Category> resultCategory = categoryController.findOne(1L);
	    
	    assertNotNull(resultCategory);
	    assertEquals(resultCategory.getBody(), category);
	    
	    verify(categoryService, times(1)).findOne(1L);
    }
}
