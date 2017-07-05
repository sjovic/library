package rs.levi9.library.repository;

import java.util.List;
import rs.levi9.library.domain.BaseEntity;

public interface BaseRepository {
    
    <T extends BaseEntity> T findOne(Long id);
    
    <T extends BaseEntity> List<T> findAll();
    
    <T extends BaseEntity> T save(T entity);
    
    void delete(Long id) throws IllegalArgumentException;
    
}