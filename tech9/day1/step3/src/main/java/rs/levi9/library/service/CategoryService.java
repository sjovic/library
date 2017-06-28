package rs.levi9.library.service;

import java.util.List;
import rs.levi9.library.domain.Category;

public interface CategoryService {
    
    Category findOne(Long id);
    
    List<Category> findAll();
    
    Category save(Category category);
    
    void remove(Long id) throws IllegalArgumentException;
}
