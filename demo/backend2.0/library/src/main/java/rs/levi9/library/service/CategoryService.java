package rs.levi9.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import rs.levi9.library.model.Category;
import rs.levi9.library.repository.CategoryRepository;
import rs.levi9.library.web.exceptions.ResourceNotFoundException;

import java.sql.SQLOutput;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository repository;

    @Autowired
    public CategoryService(@Qualifier("category") CategoryRepository repository) {
        this.repository = repository;
    }

    public Optional<Category> findOne(Long id) {
        return repository.findById(id);
    }

    public List<Category> findAll() {
        return repository.findAll();
    }

    public Category save(Category entity) throws IllegalArgumentException {
        if(entity.getId() == null) {
            return repository.save(entity);
        } else {
            //ne treba da nadje id
            Category find = repository.findById(entity.getId()).orElse(null);
            if(find == null)
                return repository.save(entity);
            else
                throw new IllegalArgumentException();
        }
    }

    public Category update( Category entity) throws IllegalArgumentException {
        if(entity.getId() == null) {
            throw new IllegalArgumentException();
        } else {
            Category find = repository.findById(entity.getId()).orElse(null);
            if(find != null)
                return repository.save(entity);
            else
                throw new IllegalArgumentException();
        }
    }

    public void delete(Long id) throws IllegalArgumentException {
        Category find = repository.findById(id).orElse(null);

        if(find == null)
            throw new IllegalArgumentException();
        else
            repository.deleteById(id);
    }
}
