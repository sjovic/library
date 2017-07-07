package rs.levi9.library.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import rs.levi9.library.domain.Category;
import rs.levi9.library.repository.CategoryRepository;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class CategoryServiceTest {

    private CategoryService categoryService;
    @Autowired
    @Qualifier(value = "inMemoryCategoryRepository")
    private CategoryRepository categoryRepository;

    @Before
    public void setUp() {
        categoryService = new CategoryService(categoryRepository);
        Category category1 = new Category();
        category1.setId(1L);
        category1.setName("Category 1");
        categoryService.save(category1);
    }

    @Test
    public void should_find_categories() {
        Category category2 = new Category();
        category2.setId(2L);
        category2.setName("Category 2");
        categoryService.save(category2);

        List<Category> result = categoryService.findAll();
        assertEquals(2L, result.size());
    }

    @Test(expected = IllegalArgumentException.class)
    public void should_throw_exception_if_no_category_is_found() {
        Category result = categoryService.findOne(555L);
    }

    @Test
    public void should_find_one_category() {
        Category resultCategory = categoryService.findOne(1L);
        assertEquals("Category 1", resultCategory.getName());
    }

    @Test(expected = IllegalArgumentException.class)
    public void should_remove_category() {
        categoryService.remove(1L);
        categoryService.findOne(1L);
    }
}
