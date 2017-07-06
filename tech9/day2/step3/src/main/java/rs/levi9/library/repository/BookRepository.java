package rs.levi9.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.levi9.library.domain.Book;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    
}
