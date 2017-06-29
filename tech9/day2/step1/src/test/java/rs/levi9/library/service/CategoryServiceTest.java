package rs.levi9.library.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import rs.levi9.library.repository.InMemoryCategoryRepository;

@RunWith(MockitoJUnitRunner.class)
public class CategoryServiceTest {

    @Mock
    private InMemoryCategoryRepository categoryRepository;
    
    private CategoryService categoryService;
    
    public CategoryServiceTest() {
        this.categoryService = new CategoryService(categoryRepository);
    }
    
    @Before
    public void setUp() {

    }
    
    @Test
    public void testMethod() {
        
    }

}
