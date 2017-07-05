package rs.levi9.library.repository.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.BaseEntity;
import rs.levi9.library.domain.Book;
import rs.levi9.library.repository.BookRepository;
import rs.levi9.library.repository.mapper.BookCallbackHandler;

import javax.sql.DataSource;
import java.sql.*;
import java.util.List;

@Repository
public class JdbcBookRepository implements BookRepository {

    private JdbcTemplate jdbcTemplate;

    private static final String findAllQuery = "select b.id, b.isbn, c.id, c.name, b.name, b.author, b.publish_date from book b\n" +
            "left join category c\n" +
            "on b.category_id = c.id";
    private static final String findOneQuery = "select b.id, b.isbn, c.id, c.name, b.name, b.author, b.publish_date from book b\n" +
            "left join category c\n" +
            "on b.category_id = c.id\n" +
            "where b.id = ?";
    private static final String saveQuery = "INSERT INTO book\n" +
            "(isbn, category_id, name, author, publish_date)\n" +
            "VALUES(?, ?, ?, ?)";
    private static final String deleteQuery = "delete from book where id=?";

    public static final String updateQuery = "update book set isbn = ?, category_id = ?, name = ?, author = ?, publish_date = ? where id = ?";

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
        KeyHolder keyHolder = new GeneratedKeyHolder();
        Book book;
        if (entity.getId() != null) {
            book = (Book) entity;
            jdbcTemplate.update(saveQuery, book.getIsbn(), book.getCategory().getId(), book.getName(),
                    book.getAuthor());
        } else {
            book = (Book) entity;

            if (((Book) entity).getCategory() != null) {
                jdbcTemplate.update(new PreparedStatementCreator() {
                    @Override
                    public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                        PreparedStatement ps = con.prepareStatement(saveQuery, Statement.RETURN_GENERATED_KEYS);
                        ps.setString(1, book.getIsbn());
                        if (book.getCategory() != null) {
                            ps.setLong(2, book.getCategory().getId());
                        } else {
                            ps.setNull(2, Types.BIGINT);
                        }
                        ps.setString(3, book.getName());
                        ps.setString(4, book.getAuthor());
                        return ps;
                    }
                }, keyHolder);
            }
            book.setId((long) keyHolder.getKey());
        }
        return (T) book;
    }

    @Override
    public void remove(Long id) throws IllegalArgumentException {
        jdbcTemplate.update(deleteQuery);
    }
}
