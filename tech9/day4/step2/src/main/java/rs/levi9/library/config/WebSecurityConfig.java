package rs.levi9.library.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configurable
@EnableWebSecurity
// Modifying or overriding the default spring boot security.
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    // This method is for overriding the default AuthenticationManagerBuilder.
    // We can specify how the user details are kept in the application. It may
    // be in a database, LDAP or in memory.

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
            // using in memory authentication
            .inMemoryAuthentication()
                .withUser("admin").password("admin").authorities("ROLE_ADMIN")
                .and()
                .withUser("user").password("user").authorities("ROLE_USER");
    }

    // This method is for overriding some configuration of the WebSecurity
    // If you want to ignore some request or request patterns then you can
    // specify that inside this method
    @Override
    public void configure(WebSecurity web) throws Exception {
        super.configure(web);
    }

    // This method is used for override HttpSecurity of the web Application.
    // We can specify our authorization criteria inside this method.
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            // starts authorizing configurations
            .authorizeRequests()
            // ignore the static files
            .antMatchers("/", "/bower_components/**", "/css/**", "/js/**", "/views/**", "/images/**").permitAll()
            // authenticate all remaining URLS
            .anyRequest().fullyAuthenticated().and()
            // enabling the basic authentication
            .httpBasic().and()
            // configuring the session as state less. Which means there is
            // no session in the server
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            // disabling the CSRF - Cross Site Request Forgery
            .csrf().disable();
    }

}
