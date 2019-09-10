package rs.levi9.library.model;

import java.util.List;

public class Authenticated {

    private String username;
    private List<String> roles;

    public Authenticated() {
    }

    public Authenticated(String username, List<String> roles) {
        this.username = username;
        this.roles = roles;
    }

    public String getUsername() {
        return username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
