package rs.levi9.library.web.controller;

import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping("/user")
    public UserDetails sayHello(UserDetails user) {
        return user;
    }

}
