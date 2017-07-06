package rs.levi9.library.repository.mapper;

import org.springframework.jdbc.core.RowMapper;
import rs.levi9.library.domain.Book;
import java.sql.ResultSet;
import java.sql.SQLException;
import rs.levi9.library.domain.Category;

public class BookRowMapper implements RowMapper<Book> {

    public static final String ID_FIELD = "id";
    public static final String TITLE_FIELD = "title";
    public static final String AUTHOR_FIELD = "author";
    public static final String CATEGORY_FIELD = "category_id";
    public static final String ISBN_FIELD = "isbn";
    public static final String PUBLISH_DATE_FIELD = "publish_date";
    public static final String CATEGORY_ID_FIELD = "cid";
    public static final String CATEGORY_NAME_FIELD = "name";

    @Override
    public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
        Book book = new Book();
        book.setId(rs.getLong(ID_FIELD));
        book.setTitle(rs.getString(TITLE_FIELD));
        book.setAuthor(rs.getString(AUTHOR_FIELD));
        book.setIsbn(rs.getString(ISBN_FIELD));
        book.setPublishDate(rs.getDate(PUBLISH_DATE_FIELD));
        Category category = new Category();
        category.setId(rs.getLong(CATEGORY_ID_FIELD));
        category.setName(rs.getString(CATEGORY_NAME_FIELD));
        book.setCategory(category);
        return book;
    }
}
