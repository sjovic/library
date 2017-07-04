package rs.levi9.library.repository.mapper;

import org.springframework.jdbc.core.RowMapper;
import rs.levi9.library.domain.Category;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CategoryRowMapper implements RowMapper<Category> {

    public static final String ID_FIELD= "id";
    public static final String NAME_FIELD = "name";

    @Override
    public Category mapRow(ResultSet rs, int rowNum) throws SQLException {
        Category resultCategory = new Category();
        resultCategory.setId(rs.getLong(ID_FIELD));
        resultCategory.setName(rs.getString(NAME_FIELD));
        return resultCategory;
    }
}
