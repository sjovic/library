package rs.levi9.library.domain;

import java.util.List;

public class AuthenticatedUser {
    
    private String username;
    private List<String> roles;
    
    public AuthenticatedUser() {
        
    }
    
    public AuthenticatedUser(String username, List<String> roles) {
        this.username = username;
        this.roles = roles;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
    
    
}
