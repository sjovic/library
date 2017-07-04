
## Library - introductory project for Levi9 summer workshop

Library is simple web application design to represent virtual library. Project was intentionally kept simple ie. is has
only few entities but it shows usage of modern web java technologies.

Project will be organized in several sections (named steps) when each one represents the final stage of the finished
section.

Sample picture**

# Course track and project phases

This course will be organized as a 5 day event. Each day will consist of introductory phase, development and QA. At the
end of the day the students will have assignments determined by the project phase to straighten up their knowledge about
the technologies used.

Project development steps/labs are divided between days:

1.	[Introduction and setup of development environment from the ground-up: Java, Eclipse IDE, Gradle, MySql, GIT](https://github.com/sjovic/library/tree/master/tech9)
2.  [day 1: Project startup and introduction to Spring framework, MVC pattern, REST, JUnit](https://github.com/sjovic/library/tree/master/tech9/day1)
3.  [day 2: Adding persistance layer to the project, JDBC Template, JavaPersistanceApi JPA, validation](link to day 3**)
4.  [day 3: Frontend: HTML5, CSS3, Bootstrap, AngularJS, Form Validation, Error messages](link to day 4**)
5.  [day 4: Adding security layer: Spring security, course wrap up](link to day 5**)

In Day 1 we will concentrate on setup of the development environment, install various needed software to successfully
finish the project course. The links will be provided in the day 1 README document. You will also get the chance to
clone the project code from the repository and build/run complete project so that you can see the scope of the project.

On Day 2 we will start development of the project with the initial setup with Gradle build system. We will use Eclipse as
our IDE and you will get introduction to Spring Boot and MVC pattern. Later on we'll add domain and service layers.
In the end we will implement REST endpoints and write JUnit unit tests.

In Day 3 we will continue development of the project by adding persistence layer with MySql relational database server.
This includes using JDBC template and later on moving to JPA. We will finish this day by adding validation annotations
for dates.

Day 4 After adding REST endpoint we proceed to adding frontend - graphical interface that will communicate with endpoints.

In Day 5 we will wrap up the course with all previous phases and add security layer with Spring Security and OAuth.


# Setup information

To run the project you should clone the repository in directory of your choosing.
Before run project do bower install in src/main/resources/static.
You can import project in Eclpise IDE and run from there or run Application.

# Technologies used

- Spring boot 
- Spring security 
- Jpa, MySQL 
- Angularjs 1.5.0

# Build tool

- Gradle

# Tools used

- Bower
- Eclipse IDE for Java EE
- DBeaver for database management
- GIT version control system VCS