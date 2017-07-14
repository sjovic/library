Day 4: Adding security layer: Spring security, course wrap up 
============================================================= 
  
Adding security layer 
--------------------- 
  
Today we will add security layer to our application which will consist of basic authentication and will serve to  
authorize user for certain operations. 
  
Reading 
------- 
  
*   [Spring Security](https://spring.io/guides/tutorials/spring-security-and-angular-js/) 
*   [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) 
*   [Authentication](https://en.wikipedia.org/wiki/Authentication) 
*   [Authorization](https://en.wikipedia.org/wiki/Authorization) 
*   [Encryption](https://www.bu.edu/tech/about/security-resources/bestpractice/auth/) 
  
Concepts 
-------- 
  
*   Spring Security 
*   Authentication vs authorization 
*   Encryption 
*   User roles 
  
Step 1 
------ 
  
1.    Add dependency for Spring Security in build.gradle 
     
2.  Add SecurityConfig configuration class and annotate it with @EnableWebSecurity and @Configurable, add annotation EnableGlobalMethodSecurity in application class. 
  
2.  Extend that class WebSecurityConfigurerAdapter in order to override default settings of spring boot security 
  
3.  Override configure method with parameter AutheticationManagerBuilder, in order to define how are user credentials  
stored in our applications and later retrieved. For simplicity, set the storage as in-memory implementation with  
two users: admin and user. Also, two authorities should be created, named the same as users. Passwords should be  
same as user-name. (never do this on production systems!)  
  
4.  Override configure method with HttpSecurity parameter, which will allow you to set authorization criteria  
ie., what user can access which API endpoints and should sessions be stored on server. At the start, you need to  
ignore root elements such as "/", "index.html", "/app/app.js" and "/css/**. Next, allow the user with ADMIN  
authority to access "/api/admin/*" and allow user to access "/api/user/**, ADMIN also has the access to latter.  
Set the session to stateless, which means no sessions will be kept on the server. In the end disable the CSRF. 
  
5.    Annotate controller methods (Book and Category) with PreAuthorize and set the appropriate roles 
  
Step 2 - frontend 
----------------------------------- 
  
1.  Add HTML code on index.html that will represent a login page with user, password edit fields and with login button.  
Provide error message if user credentials are not valid with an alert box.  
2.  In app.js controller add login method, which will create an encoded base64 string for username and password,  
and send a http GET request  on backend and check if user is authenticated.  
3.  Add methods for getting admin and user Name from API endpoints, these will be presented on the front page.  
4.  Add logout method in controller in which you will clear all the user data and present the user with the  
message if he successfully logs out. 
  
Step 3 
------ 
  
1.    Add user library user to domain layer, include fields username and password and set of role objects, which we will add next 
2.    Add role entity with fields type that enumerates two values: ROLE_USER and ROLE_ADMIN 
3.    Add authenticated user 
3.    Add user repository, which will be used for user credentials and roles  
4.    Add user service class and implement UserDetailsService, and change the configure method in config to use this class 
5.    Add user credentials to RDBMS in order to persist user and roles. 
  
Assignment 
---------- 
  
Add new user with your name suffixed with the word 'Admin' ie., 'PeraAdmin' which will have the same role as admin and  
user with your name with same role as user. Test new implementation with rest client Postman. 