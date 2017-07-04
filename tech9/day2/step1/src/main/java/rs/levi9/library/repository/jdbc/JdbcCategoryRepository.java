package rs.levi9.library.repository.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.BaseEntity;
import rs.levi9.library.domain.Category;
import rs.levi9.library.repository.CategoryRepository;
import rs.levi9.library.repository.mapper.CategoryRowMapper;

import java.util.List;

@Repository(value = "jdbcCategoryRepository")
public class JdbcCategoryRepository implements CategoryRepository {

    private static final String FIND_ALL_QUERY = "select * from category";
    private static final String FIND_BY_ID_QUERY = FIND_ALL_QUERY + " where id=?";
    private static final String SAVE_QUERY = "replace into category values (?, ?)";
    private static final String DELETE_QUERY = "delete from category where id=?";

    @Autowired
    private JdbcTemplate jdbcTemplate;

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
        jdbcTemplate.update(SAVE_QUERY, entity.getId(), ((Category)entity).getName());
        return entity;
    }

    @Override
    public void remove(Long id) throws IllegalArgumentException {
        jdbcTemplate.update(DELETE_QUERY, id);
    }
}
