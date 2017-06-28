package rs.levi9.library.service;

import java.util.ArrayList;
import java.util.HashMap;
import rs.levi9.library.domain.Category;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class InMemoryCategoryService implements CategoryService {

    private Map<Long, Category> categories = new HashMap<>();
    private final AtomicLong sequence = new AtomicLong(1);
    
    public InMemoryCategoryService() {
        
    }

    @Override
    public Category findOne(Long id) {
        return categories.get(id);
    }

    @Override
    public List<Category> findAll() {
        return new ArrayList<>(categories.values());
    }

    @Override
    public Category save(Category category) {
        if (category.getId() == null) {
            category.setId(sequence.getAndIncrement());
        }
        categories.put(category.getId(), category);
        return category;
    }

    @Override
    public void remove(Long id) throws IllegalArgumentException {
        Category category = categories.remove(id);
        if (category == null) {
            throw new IllegalArgumentException("category does not exist!");
        }
    }

}
