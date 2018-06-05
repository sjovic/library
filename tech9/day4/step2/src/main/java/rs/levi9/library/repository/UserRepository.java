package rs.levi9.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.library.domain.LibraryUser;

@Repository
public interface UserRepository extends JpaRepository<LibraryUser, Long> {

    public LibraryUser findByUsername(String username);
    
}
