package rs.levi9.library.repository;

import rs.levi9.library.domain.Member;

import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Serializable> {
    
    public Member findOneByUsername(String username);
    
}
