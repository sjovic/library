package rs.levi9.library.repository;

import java.util.List;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.BaseEntity;

@Repository
public interface BaseRepository {
    
    <T extends BaseEntity> T findOne(Long id);
    
    <T extends BaseEntity> List<T> findAll();
    
    <T extends BaseEntity> T save(T entity);
    
    void remove(Long id) throws IllegalArgumentException;
    
}