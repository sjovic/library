Day 2 Adding persistence layer to the project, JDBC Template, JavaPersistenceApi JPA, validation
================================================================================================

Adding persistence layer
------------------------

In continuation of developing the library project, today we will implement the persistence
layer and thus store our data to MySql database server. Also, a validator will be added for validation of publish dates.

Reading
-------

*   [Spring JDBC Template](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#dao-annotations)
*   [Structured query language SQL](https://www.w3schools.com/sql/default.asp)
*   [Spring JPA](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
*   [Spring validation - Custom validation](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/validation.html#validation-beanvalidation)
*   [MySql community server](https://dev.mysql.com/doc/refman/5.7/en/tutorial.html)

Concepts
--------

*   Spring JDBC Template - getting data via queries and using row mapper
*   Spring Data JPA - @Entity, repositories, field mapping, query lookup strategies
*   Spring validator - defining custom annotation for validation of fields

Step 1 - Getting data via JDBC template
---------------------------------------

1.  Connect using DBeaver to your local mysql instance (host: localhost, port 3306, user:root, pass:root)
2.  Create library database (with charset UTF 8) in MySql server
3.  Add following tables /src/main/resources/!prep/LibraryDB.JPG using /src/main/resources/!prep/library.sql
4.  Run query from DBeaver(and from command line) to get all the books with categories
5.  Add compile('mysql:mysql-connector-java:5.1.39') and compile('org.springframework.boot:spring-boot-starter-jdbc:1.5.4.RELEASE') dependencies to build.gradle
7.  Create application.properties file in src/main/resources
8.  Enter the datasource (host, port, user, pass, and driver) information in application.properties
9.  Move InMemory*Repository classes to src/main/java/rs/levi9/library/repository/inmemory package and refactor package paths
10.  Add CategoryRowMapper rowmapper class and map all the fields from the Category entity in src/main/java/rs/levi9/library/repository/mapper
11.  Add JdbcCategoryRepository class in src/main/java/rs/levi9/library/repository/jdbc and add JDBC implementations (repository class) for Category with CRUD operations (write sql queries for JDBC template)
12.  Add Qualifier in Category service for using JdbcCategoryRepository
13.  Insert few categories via REST interface and retrieve by ID

Step 1 - assignment
-------------------

1.  Add persistence layer for Book entity repeating the sections 10 to 12 from the step 1.
2.  Manually test the implementation with Postman

Step 2 - Persistence layer with Spring Data JPA
-----------------------------------------------

1. Remove compile('org.springframework.boot:spring-boot-starter-jdbc:1.5.4.RELEASE') dependency and instead add compile('org.springframework.boot:spring-boot-starter-data-jpa') dependency
2. Remove inmemory repositories, jdbc repositories, mapper repositories, and also BaseRepository
3. Refactor BookRepository and Category repository
4. Add @Transactional annotation in services, and also remove @Qualifier
5. Add @MappedSuperClass, @Id and @GeneratedValue annotations in BaseEntity
6. Annotate domain classes with @Entity and fields with appropriate @Column, @JoinColumn and if necessary add relationship annotations
7. Remove service tests
8. Add in application.properties
> spring.jpa.hibernate.ddl-auto=create-drop  
> \#spring.jpa.properties.hibernate.globally_quoted_identifiers=true  
> \#hibernate.id.new_generator_mappings=false
9. Add data.sql in src/main/resources and fill with following rows
> INSERT INTO `category`(`name`) VALUES('Java');  
> INSERT INTO `category`(`name`) VALUES('Spring');  
> INSERT INTO `category`(`name`) VALUES('Data Structures');  
> INSERT INTO `book` (`isbn`, `title`, `author`, `publish_date`, `category_id`) VALUES ('9788675553083', 'Thinking In Java', 'Bruce Eckel', '2007-01-01', 1);  
> INSERT INTO `book` (`isbn`, `title`, `author`, `publish_date`, `category_id`) VALUES ('9784673535114', 'Spring In Action', 'Craig Walls', '2014-01-01', 2);  

Step 3 - Add validators
-----------------------

1.  Create src/main/java/rs/levi9/library/web/validation/custom and Create src/main/java/rs/levi9/library/web/validation/isbn packages
2.  Create and implement Isbn13.java interface and Isbn13Validator.java class in custom package
3.  Create IsbnUtil.java class in isbn package and implement logic for isbn validation
4.  Create and implement ValidationResponse.java and ValidationErrorHandler.java classes in validation folder
5.	Annotate field ISBN in book domain object to use custom validator
6.	Declare all fields to be non-null meaning all fields are required
7.	Annotate publish date field with Past annotation meaning that book publish date should be in the past
8.  Add IsbnUtilTest.java tests for isbn validation in src/test/java/rs/levi9/library/web/validation/isbn


