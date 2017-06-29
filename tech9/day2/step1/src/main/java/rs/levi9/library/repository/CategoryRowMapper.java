package rs.levi9.library.repository;

import org.springframework.jdbc.core.RowMapper;
import rs.levi9.library.domain.Category;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by krle on 29.06.2017
 *
 */

public class CategoryRowMapper implements RowMapper<Category> {

    private static final String ID_FIELD= "id";
    private static final String NAME_FIELD = "name";

    @Override
    public Category mapRow(ResultSet rs, int rowNum) throws SQLException {
        Category resultCategory = new Category();
        resultCategory.setId(rs.getLong(ID_FIELD));
        resultCategory.setName(rs.getString(NAME_FIELD));
        return resultCategory;
    }
}
