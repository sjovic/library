
## Library - introductory project for Levi9 summer workshop

Library is simple web application design to represent virtual library. Project was intentionally kept simple ie. it has
only few entities but it shows usage of modern web java technologies.

Project will be organized in several sections (named steps) where each one represents the final stage of the finished
section.

# Course track and project phases

This course will be organized as a 5 day event. Each day will consist of introductory phase, development and QA. At the
end of the day the students will have assignments determined by the project phase to straighten up their knowledge about
the technologies used.

Project development steps/labs are divided between days:

1.	[Introduction and setup of development environment from the ground-up: Java, Eclipse IDE, Gradle, MySql, GIT](https://github.com/sjovic/library/tree/master/tech9)
2.  [day 1: Project startup and introduction to Spring framework, MVC pattern, REST, JUnit](https://github.com/sjovic/library/tree/master/tech9/day1)
3.  [day 2: Adding persistance layer to the project, JDBC Template, JavaPersistanceApi JPA, validation](https://github.com/sjovic/library/tree/master/tech9/day2)
4.  [day 3: Frontend: HTML5, CSS3, Bootstrap, Angular, Form Validation, Error messages](https://github.com/sjovic/library/tree/master/tech9/day3)
5.  [day 4: Adding security layer: Spring security, course wrap up](https://github.com/sjovic/library/tree/master/tech9/day4)

In Introduction we will concentrate on setup of the development environment, install various needed software to successfully
finish the project course. The links will be provided in the Introduction README document. You will also get the chance to
clone the project code from the repository and build/run complete project so that you can see the scope of the project.

On Day 1 we will start development of the project with the initial setup with Gradle build system. We will use Eclipse as
our IDE and you will get introduction to Spring Boot and MVC pattern. Later on we'll add domain and service layers.
In the end we will implement REST endpoints and write JUnit unit tests.

In Day 2 we will continue development of the project by adding persistence layer with MySql relational database server.
This includes using JDBC template and later on moving to JPA. We will finish this day by adding various validation annotations
for category names ie., category name should not be empty, should be unique etc.

In Day 3, after adding REST endpoint we proceed to frontend implementation - graphical interface that will communicate with endpoints.

In Day 4 we will wrap up the course with all previous phases and add security layer with basic Spring Security.


# Setup information

To run the project you should clone the repository in directory of your choosing.
Before run project do npm install in ng-library folder.
You can import project in Eclpise IDE and run from there or run Application.

# Technologies used

- Spring boot 
- Spring security 
- Jpa, MySQL 
- Angular 5

# Build tool

- Gradle

# Tools used

- Node.js
- VS Code
- Angular CLI
- Eclipse IDE for Java EE
- DBeaver for database management
- GIT version control system VCS
