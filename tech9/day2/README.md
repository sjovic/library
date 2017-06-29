Day 3 Adding persistance layer to the project, JDBC Template, JavaPersistanceApi JPA, validation
================================================================================================

Adding persistance layer
------------------------

In continuation of developing the library project, today we will implement the persistance
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

1.  Install DBeaver and connect to your local mysql instance (host: localhost, port 3306, user:root, pass:root)
2.  Create library database (with charset UTF 8) in MySql server
3.  Add folowing tables /src/main/resources/!prep/LibraryDB.JPG
4.  Run query from DBeaver(and from command line) to get all the books with categories
5.  Configure Gradle for mysql connector with version 5.1.39
6.  Enter the datasource (host, port, user and pass) information in application.properties
7.  Add rowmapper and map all the fields from the Category entity
8.  Add JDBC implementations (repository class) for Category with CRUD operations (write sql queries for JDBC template)
9.  Insert few categories via REST interface and retrive by ID

Step 1 - assignment
-------------------

1.  Add persistance layer for Book entity repeating the sections 7 to 9 from the step 1.
2.  Manually test the implementation with Postman

Step 2 - Persistance layer with Spring Data JPA
-----------------------------------------------
