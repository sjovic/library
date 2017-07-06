package rs.levi9.library.service;

import rs.levi9.library.domain.Category;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import rs.levi9.library.repository.BookRepository;
import rs.levi9.library.repository.CategoryRepository;

@Service
public class CategoryService {
    
    private CategoryRepository categoryRepository;
    private BookRepository bookRepository;
    
    @Autowired
    public CategoryService(CategoryRepository categoryRepository, BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        this.categoryRepository = categoryRepository;
    }

    public Category findOne(Long id) {
        return categoryRepository.findOne(id);
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    public void delete(Long id) {
        if (bookRepository.findByCategory(id).size() > 0) {
            throw new IllegalArgumentException("Books with this category exits");
        }
        categoryRepository.delete(id);
    }

}
