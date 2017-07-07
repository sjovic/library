package rs.levi9.library.repository;

import rs.levi9.library.domain.Book;

import java.util.List;

public interface BookRepository extends BaseRepository {

    List<Book> findByCategory(Long id);

}
