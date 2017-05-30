package rs.levi9.library;

import org.jtransfo.JTransfo;
import org.jtransfo.JTransfoImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
//@EnableWebSecurity
public class ApplicationConfig {

    @Bean(name = "jTransfo")
    public JTransfo jTransfo() {
        return new JTransfoImpl();
    }

//    @Configuration
//    @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
//    protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//        @Override
//        protected void configure(HttpSecurity http) throws Exception {
//            http
//                .httpBasic()
//                .and()
//                .authorizeRequests()
//                .antMatchers("/index.html", "/login.html", "/").permitAll()
//                .anyRequest().authenticated()
//                    .and().csrf().disable();
//        }
//    }
}
