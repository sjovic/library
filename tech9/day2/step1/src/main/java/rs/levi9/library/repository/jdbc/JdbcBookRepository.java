package rs.levi9.library.repository.jdbc;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.BaseEntity;
import rs.levi9.library.domain.Book;
import rs.levi9.library.repository.BookRepository;
import java.sql.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import rs.levi9.library.repository.mapper.BookRowMapper;

@Repository
public class JdbcBookRepository implements BookRepository {

    private static final String FIND_ALL_QUERY = "select b.id, b.isbn, c.id as cid, c.name, b.title, b.author, b.publish_date from book b\n" +
            "left join category c\n" +
            "on b.category_id = c.id";
    private static final String FIND_BY_ID_QUERY = "select b.id, b.isbn, c.id as cid, c.name, b.title, b.author, b.publish_date from book b\n" +
            "left join category c\n" +
            "on b.category_id = c.id\n" +
            "where b.id = ?";
    private static final String SAVE_QUERY = "INSERT INTO book\n" +
            "(isbn, category_id, title, author, publish_date)\n" +
            "VALUES(?, ?, ?, ?, ?)";
    private static final String DELETE_QUERY = "delete from book where id=?";
    public static final String UPDATE_QUERY = "update book set isbn = ?, category_id = ?, title = ?, author = ?, publish_date = ? where id = ?";

    private JdbcTemplate jdbcTemplate;
    
    @Autowired
    public JdbcBookRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    @Override
    public Book findOne(Long id) {
        List<Book> resultSet = jdbcTemplate.query(FIND_BY_ID_QUERY, new Object[]{id}, new BookRowMapper());
        return resultSet.get(0);
    }
    
    @Override
    public List<Book> findAll() {
        return jdbcTemplate.query(FIND_ALL_QUERY, new BookRowMapper());
    }

    @Override
    public <T extends BaseEntity> T save(T entity) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        Book book;
        if (entity.getId() != null) {
            book = (Book) entity;
            jdbcTemplate.update(UPDATE_QUERY, book.getIsbn(), book.getCategory().getId(), book.getTitle(),
                    book.getAuthor(), book.getPublishDate(), book.getId());
            return (T) findOne(book.getId());
        } else {
            book = (Book) entity;

            if (((Book) entity).getCategory() != null) {
                jdbcTemplate.update(new PreparedStatementCreator() {
                    @Override
                    public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                        PreparedStatement ps = con.prepareStatement(SAVE_QUERY, Statement.RETURN_GENERATED_KEYS);
                        ps.setString(1, book.getIsbn());
                        if (book.getCategory() != null) {
                            ps.setLong(2, book.getCategory().getId());
                        } else {
                            ps.setNull(2, Types.BIGINT);
                        }
                        ps.setString(3, book.getTitle());
                        ps.setString(4, book.getAuthor());
                        if (book.getPublishDate() != null) {
                        	ps.setDate(5, new java.sql.Date(book.getPublishDate().getTime()));
                        }
                        return ps;
                    }
                }, keyHolder);
            }
            book.setId((long) keyHolder.getKey());
        }
        return (T) book;
    }

    @Override
    public void delete(Long id) throws IllegalArgumentException {
        jdbcTemplate.update(DELETE_QUERY);
    }
}
