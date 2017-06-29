package rs.levi9.library.repository.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.BaseEntity;
import rs.levi9.library.domain.Book;
import rs.levi9.library.repository.BookRepository;
import rs.levi9.library.repository.mapper.BookCallbackHandler;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class BookRepositoryImpl implements BookRepository {

    private JdbcTemplate jdbcTemplate;

    private static final String findAllQuery = "select b.id, b.isbn, c.id, c.name, b.name, b.author from book b\n" +
            "left join category c\n" +
            "on b.category_id = c.id";
    private static final String findOneQuery = "select b.id, b.isbn, c.id, c.name, b.name, b.author from book b\n" +
            "left join category c\n" +
            "on b.category_id = c.id\n" +
            "where b.id = ?";
    private static final String saveQuery = "replace into book values (?, ?, ?, ?, ?)";
    private static final String deleteQuery = "delete from book where id=?";

    @Autowired
    private void setDataSource(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public Book findOne(Long id) {
        BookCallbackHandler bookCallbackHandler = new BookCallbackHandler();

        jdbcTemplate.query(findOneQuery, bookCallbackHandler, id);

        return bookCallbackHandler.getBook();
    }

    @Override
    public List<Book> findAll() {
        BookCallbackHandler bookCallbackHandler = new BookCallbackHandler();
        jdbcTemplate.query(findAllQuery, bookCallbackHandler);
        return bookCallbackHandler.getBooks();
    }

    @Override
    public <T extends BaseEntity> T save(T entity) {
        return null;
    }

    @Override
    public void remove(Long id) throws IllegalArgumentException {
        jdbcTemplate.update(deleteQuery);
    }
}
