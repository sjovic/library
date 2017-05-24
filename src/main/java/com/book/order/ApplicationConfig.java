package com.book.order;

import org.jtransfo.JTransfo;
import org.jtransfo.JTransfoImpl;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class ApplicationConfig {

    @Bean(name = "jTransfo")
    public JTransfo jTransfo() {
        return new JTransfoImpl();
    }

    @Configuration
    @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
    protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                .httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/index.html", "/login.html", "/").permitAll()
                .anyRequest().authenticated()
                    .and().csrf().disable();
        }
    }
}
