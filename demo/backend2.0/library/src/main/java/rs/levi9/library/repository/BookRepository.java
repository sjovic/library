package rs.levi9.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.library.model.Book;
import rs.levi9.library.model.Category;

import java.util.List;


@Repository("book")
public interface BookRepository extends JpaRepository<Book, Long> {

    public List<Book> findAllByCategory(Category category);
}
