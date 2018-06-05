Day 4: Adding security layer: Spring security, course wrap up 
============================================================= 
  
Adding security layer 
--------------------- 
  
Today we will add security layer to our application which will consist of basic authentication and will serve to  
authorize user for certain operations. 
  
Reading 
------- 
  
* [Spring Security](https://spring.io/guides/tutorials/spring-security-and-angular-js/) 
* [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) 
* [Authentication](https://en.wikipedia.org/wiki/Authentication) 
* [Authorization](https://en.wikipedia.org/wiki/Authorization) 
* [Encryption](https://www.bu.edu/tech/about/security-resources/bestpractice/auth/) 
  
Concepts 
-------- 
  
* Spring Security 
* Authentication vs authorization 
* Encryption 
* User roles 
  
Step 1 
------ 
  
1. Add dependency for Spring Security in build.gradle "compile('org.springframework.boot:spring-boot-starter-security')"
2. Add src/main/java/rs/levi9/library/config/WebSecurityConfig.java configuration class and annotate it with @EnableWebSecurity and @Configurable, add annotation EnableGlobalMethodSecurity in application class.    
3. Extend that class WebSecurityConfigurerAdapter in order to override default settings of spring boot security    
4. Override configure method with parameter AutheticationManagerBuilder, in order to define how are user credentials  
stored in our applications and later retrieved. For simplicity, set the storage as in-memory implementation with  
two users: admin and user. Also, two authorities should be created, named the same as users. Passwords should be  
same as user-name. (never do this on production systems!)    
5. Override configure method with HttpSecurity parameter, which will allow you to set authorization criteria  
ie., what user can access which API endpoints and should sessions be stored on server. At the start, you need to  
ignore root elements such as "/", "/signin", "/index.html", "/\*.bundle.\*", "/favicon.ico", "/assets/**".
Set the session to stateless, which means no sessions will be kept on the server. In the end disable the CSRF.    
6. Annotate controller methods (Book and Category) with PreAuthorize and set the appropriate roles and statuses

Step 2 
------ 
  
1. Add user library user to domain layer, include fields username and password and set of role objects, which we will add next 
2. Add role entity with fields type that enumerates two values: ROLE_USER and ROLE_ADMIN 
3. Add authenticated user 
3. Add user repository, which will be used for user credentials and roles  
4. Add user service class and implement UserDetailsService, and change the configure method in config to use this class 
5. Add user credentials to RDBMS in order to persist user and roles adding this lines to data.sql so that content will look like this
> INSERT INTO `category`(`name`) VALUES('Java');  
> INSERT INTO `category`(`name`) VALUES('Spring');  
> INSERT INTO `category`(`name`) VALUES('Data Structures');  

> INSERT INTO `book` (`isbn`, `title`, `author`, `publish_date`, `category_id`) VALUES ('9788675553083', 'Thinking In Java', 'Bruce Eckel', '2007-01-01', 1);  
> INSERT INTO `book` (`isbn`, `title`, `author`, `publish_date`, `category_id`) VALUES ('9784673535114', 'Spring In Action', 'Craig Walls', '2014-01-01', 2);  

> INSERT INTO `role`(`type`) VALUES ('ROLE_ADMIN');  
> INSERT INTO `role`(`type`) VALUES ('ROLE_USER');  

> INSERT INTO `library_user`(`password`,`username`) VALUES ('admin','admin');  
> INSERT INTO `library_user`(`password`,`username`) VALUES ('user','user');  

> INSERT INTO `library_user_roles`(`user_id`,`role_id`)VALUES(1, 1);  
> INSERT INTO `library_user_roles`(`user_id`,`role_id`)VALUES(1, 2);  
> INSERT INTO `library_user_roles`(`user_id`,`role_id`)VALUES(2, 2); 
  
Step 3 (frontend) - Create Login component and authorization service
----------------------------------- 
  
1. Generate "login" component.
2. Add form element with input fields for username, password and "Sign In" button in "login.component.html" template file.
3. Pass values from login form to onLogin function inside "login.component.ts".
4. Create AuthService class with "login" function that takes "username" and "password" as arguments, encodes them into base64 string and pass it as authorization headers to http GET request to check if user is authenticated.
5. Add "AuthService" to "app.module.ts" providers array.
6. Pass request headers, from "AuthService", on every request in book and category service.
7. Add functions in auth service for retrieving username and roles for displaying username in header component and displaying links in header based on roles of currently logged-in user.
8. Add "AuthService" to "header.component.ts" constructor.
9. Add login link and dropdown for logging out in header template.
10. Add "login" route to "app-routing.module.ts".
11. Add function in auth service for getting authorization headers that is passed on every REST request.
12. Add logout function in auth service that will clear all the user data and redirect user to the login page.

Step 4 (frontend) - Add  request interceptor and create auth-guard service to restrict unauthorized routes
----------------------------------- 

1. Create app.interceptor.ts in src/app/interceptors and add intercept method that will include "X-Requested-With: XMLHttpRequest" headers for every request to prevent browser from showing login dialog.
2. Create "auth-guard.service.ts" that implements "CanActivate" interface and "canActivate" function.
3. "canActivate" function returns true if user is authenticated and have authorities to access route, otherwise it returns false and navigate to "/home" or "/signin" route.
4. In "app-routing.module.ts" file define AuthGuard as a service for the canActivate property and pass required role for the given routes that needs to bi authorized.

  
Assignment 
---------- 
  
Add new user with your name suffixed with the word 'Admin' ie., 'PeraAdmin' which will have the same role as admin and  
user with your name with same role as user. Test new implementation with rest client Postman. 
