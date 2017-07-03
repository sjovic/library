package rs.levi9.library.repository.jdbc;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.BaseEntity;
import rs.levi9.library.repository.BookRepository;
import rs.levi9.library.domain.Book;
import rs.levi9.library.repository.mapper.BookResultSetExtractor;

@Repository(value = "jdbcBookRepository")
public class JdbcBookRepository implements BookRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String FIND_ALL_QUERY = "select b.id, b.isbn, c.id, c.name, b.name, b.author from book b\n" +
            "left join category c\n" +
            "on b.category_id = c.id";
    private static final String FIND_BY_ID_QUERY = "select b.id, b.isbn, c.id, c.name, b.name, b.author from book b\n" +
            "left join category c\n" +
            "on b.category_id = c.id\n" +
            "where b.id = ?";
    private static final String SAVE_QUERY = "replace into book values (?, ?, ?, ?, ?)";
    private static final String DELETE_QUERY = "delete from book where id=?";

    @Override
    public Book findOne(Long id) {
        List<Book> resultSet = jdbcTemplate.query(FIND_BY_ID_QUERY, new BookResultSetExtractor());
        return resultSet.get(0);
    }

    @Override
    public List<Book> findAll() {
        return jdbcTemplate.query(FIND_ALL_QUERY, new BookResultSetExtractor());
    }

    @Override
    public <T extends BaseEntity> T save(T entity) {
        return null;
    }

    @Override
    public void remove(Long id) throws IllegalArgumentException {
        jdbcTemplate.update(DELETE_QUERY);
    }
}
