package rs.levi9.library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.levi9.library.config.WebSecurityConfig;
import rs.levi9.library.model.Authenticated;
import rs.levi9.library.model.Role;
import rs.levi9.library.repository.RoleRepository;
import rs.levi9.library.repository.UserRepository;

import java.util.*;

@Service
@Transactional
public class UserService implements UserDetailsService {

    private final UserRepository repository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserService(UserRepository repository, RoleRepository role) {
        this.repository = repository;
        this.roleRepository = role;
    }

    public User save(rs.levi9.library.model.User user) {

        Optional<Role> r  = roleRepository.findById(new Long(2));
        ArrayList<Role> roles = new ArrayList<Role>();
        roles.add(r.get());
        user.setRole(roles);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));

        if(user.getPassword() != null && user.getUsername() != null) {
            Optional<rs.levi9.library.model.User> checkUser = repository.findByUsername(user.getUsername());

            if(checkUser.isPresent()) {
                return null;
            } else {
                repository.save(user);
                return new User(user.getUsername(), user.getPassword(), getAuthorities(user));
            }
        } else {
            return null;
        }
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        rs.levi9.library.model.User user = repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username "+username+" not founded"));
        return new User(user.getUsername(), user.getPassword(), getAuthorities(user));
    }

    private static Collection<? extends GrantedAuthority> getAuthorities(rs.levi9.library.model.User user) {
        String[] userRoles = user.getRole().stream().map((role) -> role.getRole()).toArray(String[]::new);
        Collection<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(userRoles);
        return authorities;
    }
}
