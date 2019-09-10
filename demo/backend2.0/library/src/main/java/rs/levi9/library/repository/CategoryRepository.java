package rs.levi9.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.library.model.Category;

@Repository("category")
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
