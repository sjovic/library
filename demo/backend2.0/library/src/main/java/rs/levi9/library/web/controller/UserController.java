package rs.levi9.library.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import rs.levi9.library.config.JwtTokenUtil;
import rs.levi9.library.model.Authenticated;
import rs.levi9.library.model.JwtResponse;
import rs.levi9.library.model.Role;
import rs.levi9.library.model.User;
import rs.levi9.library.service.UserService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 30)
public class UserController {

    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody User user) throws Exception{
        final UserDetails userDetails = service.save(user);
        System.out.println(userDetails);
        if(userDetails == null)
            throw new Exception("USERNAME IN NOT UNIQUE");

        List<String> roles = new ArrayList<String>();
        for(GrantedAuthority authority : userDetails.getAuthorities()) {
            roles.add(authority.getAuthority());
        }

        return ResponseEntity.ok(new Authenticated(user.getUsername(), roles, null));
    }

    @RequestMapping("/user")
    public Authenticated getUser(Authentication authentication){

        List<String> roles = new ArrayList<>();
        for(GrantedAuthority authority : authentication.getAuthorities()) {
            roles.add(authority.getAuthority());

        }
        Authenticated user = new Authenticated(authentication.getName(), roles, null);

        return user;
    }

    //ovo uzima username i password i daje nam jwt tj, autentikacija
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User authenticationRequest) throws Exception {


        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword(), getAuthorities(authenticationRequest));
        final UserDetails userDetails = service.loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);

        String username = userDetails.getUsername();
        List<String> roles = new ArrayList<String>();
        for(GrantedAuthority authority : userDetails.getAuthorities()) {
            roles.add(authority.getAuthority());
        }

        return ResponseEntity.ok(new Authenticated(username, roles, token));
    }

    private void authenticate(String username, String password, Collection<? extends GrantedAuthority> authorities) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password, authorities));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        } catch ( Exception e) {
            e.printStackTrace();
        }
    }

    private static Collection<? extends GrantedAuthority> getAuthorities(rs.levi9.library.model.User user) {
        String[] userRoles = user.getRole().stream().map((role) -> role.getRole()).toArray(String[]::new);
        Collection<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(userRoles);
        return authorities;
    }
}
