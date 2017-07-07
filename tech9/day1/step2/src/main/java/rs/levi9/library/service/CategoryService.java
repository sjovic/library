package rs.levi9.library.service;

import rs.levi9.library.domain.Category;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import rs.levi9.library.repository.CategoryRepository;

@Service
public class CategoryService {
    
    private CategoryRepository categoryRepository;
    
    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
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

    public void delete(Long id) throws IllegalArgumentException {
        categoryRepository.delete(id);
    }

}
