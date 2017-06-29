package rs.levi9.library.repository.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.BaseEntity;
import rs.levi9.library.domain.Category;
import rs.levi9.library.repository.CategoryRepository;
import rs.levi9.library.repository.CategoryRowMapper;

import javax.sql.DataSource;
import java.util.List;

/**
 * Created by krle on 29.06.2017
 */
@Repository
public class CategoryRepositoryImpl implements CategoryRepository {

    private static final String findAllQuery = "select * from category";
    private static final String findByIdQuery = findAllQuery + " where id=?";
    private static final String saveQuery = "replace into category(id, name) values (?, ?)";
    private static final String deleteQuery = "delete from category where id=?";

    private JdbcTemplate jdbcTemplate;

    @Autowired
    private void setDataSource(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public <T extends BaseEntity> T findOne(Long id)  {
        List<Category> result = jdbcTemplate.query(findByIdQuery, new Object[]{id}, new CategoryRowMapper());
        if ((result.size() < 1) || (result.size() > 1)) {
            return null;
        }
        return (T) result.get(0);
    }

    @Override
    public <T extends BaseEntity> List<T> findAll() {
        return (List<T>)jdbcTemplate.query(findAllQuery, new CategoryRowMapper());
    }

    @Override
    public <T extends BaseEntity> T save(T entity) {
        jdbcTemplate.update(saveQuery, entity.getId(), ((Category)entity).getName());
        return entity;
    }

    @Override
    public void remove(Long id) throws IllegalArgumentException {
        jdbcTemplate.update(deleteQuery, id);
    }
}
