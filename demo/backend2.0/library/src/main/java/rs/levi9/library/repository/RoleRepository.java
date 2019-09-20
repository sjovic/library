package rs.levi9.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.levi9.library.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
