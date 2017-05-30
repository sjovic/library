package rs.levi9.library.service;

import rs.levi9.library.domain.Category;
import java.util.List;

import org.springframework.stereotype.Service;

import org.jtransfo.JTransfo;
import org.springframework.beans.factory.annotation.Autowired;
import rs.levi9.library.repository.CategoryRepository;
import javax.transaction.Transactional;

@Service
@Transactional
public class CategoryService extends JTransfoService {

    private CategoryRepository categoryRepository;
    
    @Autowired
    public CategoryService(JTransfo jTransfo, CategoryRepository categoryRepository) {
        super(jTransfo);
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

    public void remove(Long id) throws IllegalArgumentException {
        Category category = categoryRepository.findOne(id);
        if (category == null) {
            throw new IllegalArgumentException("category does not exist!");
        }
        categoryRepository.delete(category);
    }

}
