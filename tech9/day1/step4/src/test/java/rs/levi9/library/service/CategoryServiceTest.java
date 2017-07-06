package rs.levi9.library.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import rs.levi9.library.domain.Book;
import rs.levi9.library.domain.Category;

import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class CategoryServiceTest {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private BookService bookService;

    @Before
    public void setUp() {
        Category category1 = new Category();
        category1.setId(1L);
        category1.setName("Category 1");
        categoryService.save(category1);

        Category category2 = new Category();
        category2.setId(2L);
        category2.setName("Category 2");
        categoryService.save(category2);

        Book book1 = new Book();
        book1.setId(1L);
        book1.setTitle("Spring in Action 4");
        book1.setAuthor("Craig Walls");
        book1.setIsbn("9781617291203");
        book1.setCategory(category1);
        book1.setPublishDate(new Date());
        bookService.save(book1);
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
    public void should_delete_category() {
        categoryService.delete(2L);
        categoryService.findOne(2L);
    }

    @Test(expected = IllegalArgumentException.class)
    public void should_not_delete_category_if_book_has_one() {
        categoryService.delete(1L);
    }
}
