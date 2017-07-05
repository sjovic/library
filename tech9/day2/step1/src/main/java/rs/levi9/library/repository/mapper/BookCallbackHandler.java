package rs.levi9.library.repository.mapper;

import org.springframework.jdbc.core.RowCallbackHandler;
import rs.levi9.library.domain.Book;
import rs.levi9.library.domain.Category;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BookCallbackHandler implements RowCallbackHandler {


    private List<Book> result = new ArrayList<>();
    private Category currentCategory = null;
    private Book currentBook = null;

    @Override
    public void processRow(ResultSet rs) throws SQLException {
        final Long bookId = rs.getLong("b." + BookRowMapper.ID_FIELD);
        if (currentBook == null || !bookId.equals(currentBook.getId())) {
            currentBook = new Book();
            result.add(currentBook);
            currentBook.setId(bookId);
            currentBook.setPublishDate(rs.getDate("b." + BookRowMapper.PUBLISH_DATE_FIELD));
            currentBook.setIsbn(rs.getString("b." + BookRowMapper.ISBN_FIELD));
            currentBook.setAuthor(rs.getString("b." + BookRowMapper.AUTHOR_FIELD));
            currentBook.setName(rs.getString("b." + BookRowMapper.NAME_FIELD));
        }

        final Long categoryId = rs.getLong("c." + BookRowMapper.ID_FIELD);
        if (currentCategory == null || !categoryId.equals(currentCategory.getId())) {
            currentCategory = new Category();
            currentCategory.setId(categoryId);
            currentCategory.setName(rs.getString("c." + CategoryRowMapper.NAME_FIELD));
            currentBook.setCategory(currentCategory);
        }
    }

    public List<Book> getBooks() {
        return result;
    }

    public Book getBook() {
        if (result.isEmpty()) {
            return null;
        }
        return result.get(0);
    }
}
