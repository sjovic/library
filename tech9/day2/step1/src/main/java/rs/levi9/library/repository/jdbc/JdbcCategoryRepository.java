package rs.levi9.library.repository.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.BaseEntity;
import rs.levi9.library.domain.Book;
import rs.levi9.library.domain.Category;
import rs.levi9.library.repository.CategoryRepository;
import rs.levi9.library.repository.mapper.CategoryRowMapper;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;
import java.util.List;

@Repository(value = "jdbcCategoryRepository")
public class JdbcCategoryRepository implements CategoryRepository {

    private static final String FIND_ALL_QUERY = "select * from category";
    private static final String FIND_BY_ID_QUERY = FIND_ALL_QUERY + " where id=?";
    private static final String SAVE_QUERY = "INSERT INTO library.category (name) VALUES(?);";
    private static final String DELETE_QUERY = "delete from category where id=?";
    private static final String UPDATE_QUERY = "update category set name = ? where id = ?";

    private JdbcTemplate jdbcTemplate;
    
    @Autowired
    public JdbcCategoryRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Category findOne(Long id)  {
        List<Category> result = jdbcTemplate.query(FIND_BY_ID_QUERY, new Object[]{id}, new CategoryRowMapper());
        if ((result.size() < 1) || (result.size() > 1)) {
            return null;
        }
        return result.get(0);
    }

    @Override
    public List<Category> findAll() {
        return jdbcTemplate.query(FIND_ALL_QUERY, new CategoryRowMapper());
    }

    @Override
    public <T extends BaseEntity> T save(T entity) {
    	KeyHolder keyHolder = new GeneratedKeyHolder();
    	Category category;
    	if (entity.getId() != null) {
    		category = (Category) entity;
    		jdbcTemplate.update(UPDATE_QUERY, category.getName(), category.getId());
    	} else {
    		category = (Category) entity;
            jdbcTemplate.update(new PreparedStatementCreator() {
				
				@Override
				public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
					PreparedStatement ps = con.prepareStatement(SAVE_QUERY, Statement.RETURN_GENERATED_KEYS);
					ps.setString(1, category.getName());
					return ps;
					}
				}
				, keyHolder);
            }
        category.setId((long) keyHolder.getKey());
        return (T)category;
    }
    
    @Override
    public void delete(Long id) throws IllegalArgumentException {
        jdbcTemplate.update(DELETE_QUERY, id);
    }
}
