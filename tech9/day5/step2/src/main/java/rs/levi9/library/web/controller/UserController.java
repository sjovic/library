package rs.levi9.library.web.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.levi9.library.domain.AuthenticatedUser;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @RequestMapping("user")
    public AuthenticatedUser getUser(Authentication authentication) {
        List<String> roles = new ArrayList<>();
        for(GrantedAuthority authority : authentication.getAuthorities()) {
            roles.add(authority.getAuthority());
        }
        AuthenticatedUser user = new AuthenticatedUser(
                authentication.getName(), roles);
        return user;
    }

}
