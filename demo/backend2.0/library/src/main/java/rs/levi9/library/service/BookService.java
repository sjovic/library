package rs.levi9.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import rs.levi9.library.model.Book;
import rs.levi9.library.model.Category;
import rs.levi9.library.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository repository;

    @Autowired
    public BookService(@Qualifier("book") BookRepository repository) {
        this.repository = repository;
    }

    public Optional<Book> findOne(Long id)  {
        return repository.findById(id);
    }

    public List<Book> findAll() {
        return repository.findAll();
    }

    public Book save(Book entity) throws IllegalArgumentException {
        if(entity.getId() == null) {
            return repository.save(entity);
        } else {
            //za upis ne treba id
            Book findBook = findOne(entity.getId()).orElse(null);;

            if(findBook!=null)
                throw new IllegalArgumentException();
            else
                return repository.save(entity);
        }
    }

    public Book update(Book entity) throws IllegalArgumentException{
        if(entity.getId() == null) {
            throw new IllegalArgumentException();
        } else {
            //za update treba id
            Book findBook = findOne(entity.getId()).orElse(null);

            if(findBook == null)
                throw new IllegalArgumentException();
            else
                return repository.save(entity);
        }
    }

    public void delete(Long id) throws IllegalArgumentException {
        Book findBook = findOne(id).orElse(null);

        if(findBook == null)
            throw new IllegalArgumentException();
        else
        repository.deleteById(id);
    }

    public List<Book> findByCategory(Category category) throws IllegalArgumentException {
        List<Book> ret = repository.findAllByCategory(category);

        if(ret == null || ret.isEmpty())
            throw new IllegalArgumentException();
        else
            return ret;
    }
}
