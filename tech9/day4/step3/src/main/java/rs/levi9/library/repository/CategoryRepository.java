package rs.levi9.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.levi9.library.domain.Category;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
