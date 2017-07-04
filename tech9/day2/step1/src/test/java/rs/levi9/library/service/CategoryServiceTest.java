package rs.levi9.library.service;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import rs.levi9.library.repository.inmemory.InMemoryCategoryRepository;

@RunWith(SpringJUnit4ClassRunner.class)
public class CategoryServiceTest {

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
        Assert.assertNotNull(categoryRepository);
    }

}
