Day 1 Project startup and introduction to Spring framework, MVC pattern, REST, JUnit
====================================================================================

Project startup
---------------

Today we will start the project, make sure you have everything installed from the previous day, but at the minimum:

 *  JDK
 *  IntelliJ IDEA IDE
 *  Git version control system


Reading - official docs
-------

*   [Spring framework](https://spring.io/docs)
*   [Dependency injection](https://martinfowler.com/articles/injection.html)
*   [MVC pattern](http://www.oracle.com/technetwork/articles/javase/index-142890.html)
*   [Domain and Service layer](https://vrtoonjava.wordpress.com/2012/06/17/part-1-designing-the-domain-model-and-the-service-layer/)
*   [REST and HTTP protocols](https://www.sitepoint.com/developers-rest-api/)
*   [JUnit](http://junit.org/junit4/)

Concepts
--------

*   Spring beans, containers, bean wiring
*   Dependency injection example
*   Basic CRUD operations (Create, Read, Update, Delete)
*   Naming conventions
*   Gradle configuration/tasks
*   Request mapping/REST endpoints
*   Unit testing

Step 1 - Project startup
------------------------

1.  Create new Gradle Java Project in IntelliJ IDEA, with the directory of your choosing (your working default directory will be just fine). 
    Set version to 0.0.1, and for ArtifactId set "library". Enable Auto Import, and for project name use "library".
2.  Configure Gradle for first-time build.

Step 2 - Creating domain and service layers
-------------------------------------------

1. Create src folder in root of project
2. Create additional folder path src/main/java/rs/levi9/library
3. In library folder create packages domain, repository and service
4. In library folder create LibraryApplication.java class
5. Edit build.gradle with this configuration

> plugins {  
>     id 'org.springframework.boot' version '1.5.3.RELEASE'  
> }  
> 
> apply plugin: 'java'  
> 
> jar {  
>     version = '0.0.1-SNAPSHOT'  
> }  
> 
> task wrapper(type: Wrapper) {  
>     gradleVersion = '3.5'  
> }  
> 
> sourceCompatibility = 1.8  
> targetCompatibility = 1.8  
> 
> repositories {  
>     mavenCentral()  
> }  
> 
> dependencies {  
>     compile('org.springframework.boot:spring-boot-starter-web');  
> }  

6. In LibraryApplication java file add @SpringBootApplication annotation to class and import it
7. Add main method to this class

> public static void main(String[] args) {  
>   SpringApplication.run(LibraryApplication.class, args);  
> }

8. Run application
9. Add corresponding domain layers BaseEntity and Category
10. Add corresponding repository layers interfaces BaseRepository and CategoryRepository
11. Add corresponding service layer CategoryService
12. Add in-memory implementation for Category entity, which later will be replaced with persistence layer.

Step 2 - Assignment
-------------------

Add the Book entity to project with the following properties: title, author, category, isbn,  publishDate. Implement domain and service layers, and add in-memory repository implementation by the example of category repository with basic CRUD operations.

Step 3 - Unit testing
---------------------

1. Add unit test dependency testCompile('org.springframework.boot:spring-boot-starter-test') in build.gradle file
2. Create src/test/java/rs/levi9/library/service/CategoryServiceTest.java
3. Add unit tests for service in-memory implementation for Category.

Step 3 - Assignment
-------------------

Add unit tests for Book service implementation.

Step 4 - Adding controller
--------------------------

1.  Add category controller with appropriate request mappings in src/main/java/rs/levi9/library/web/controller.
2.  Retrieve the in-memory date with Restful client (Postman) and examine the result set (JSON)
3.  Refactor tests to use spring junit runner

Step 4 - Assignment
-------------------

Add book controller with request mappings /books and /books/id and implement CRUD operations.
Test the new controller with REST client Postman.
