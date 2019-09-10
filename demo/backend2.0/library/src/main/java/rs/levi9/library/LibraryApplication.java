package rs.levi9.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
@EnableJpaAuditing
public class LibraryApplication {

	public static void main(String[] args) {
//
//		BCryptPasswordEncoder p = new BCryptPasswordEncoder();
//
//		System.out.println("admin: "+ p.encode("user"));

		SpringApplication.run(LibraryApplication.class, args);
	}

}
