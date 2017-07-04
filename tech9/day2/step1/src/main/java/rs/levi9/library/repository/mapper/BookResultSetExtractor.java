package rs.levi9.library.repository.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import rs.levi9.library.domain.Book;

public class BookResultSetExtractor implements ResultSetExtractor<List<Book>> {

    public static final String ID_FIELD = "id";
    public static final String NAME_FIELD = "name";
    public static final String AUTHOR_FIELD = "author";
    public static final String CATEGORY_FIELD = "category_id";
    public static final String ISBN_FIELD = "isbn";
    public static final String PUBLISH_DATE_FIELD = "publish_date";
    
    private final CategoryRowMapper categoryRowMapper = new CategoryRowMapper();

//    @Override
//    public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
//        Book book = new Book();
//        book.setId(rs.getLong(ID_FIELD));
//        book.setName(rs.getString(NAME_FIELD));
//        book.setAuthor(rs.getString(AUTHOR_FIELD));
//        book.setIsbn(rs.getString(ISBN_FIELD));
//        book.setPublishDate(rs.getDate(PUBLISH_DATE_FIELD));
//        return book;
//    }

    @Override
    public List<Book> extractData(ResultSet rs) throws SQLException, DataAccessException {
        List<Book> books = new ArrayList<Book>();
        while(rs.next()) {
            Book book = new Book();
            book.setId(rs.getLong(ID_FIELD));
            book.setName(rs.getString(NAME_FIELD));
            book.setAuthor(rs.getString(AUTHOR_FIELD));
            book.setIsbn(rs.getString(ISBN_FIELD));
            book.setPublishDate(rs.getDate(PUBLISH_DATE_FIELD));
            book.setCategory(categoryRowMapper.mapRow(rs, 0));
            
            books.add(book);
        }
        return books;
    }
}
