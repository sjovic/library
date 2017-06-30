Day 3 Frontend: HTML5, CSS3, Bootstrap, AngularJS, Form Validation, Error messages
==================================================================================

Designing frontend presentation
-------------------------------

After finishing the backend implementation today we will focus to design the user interface with frontend technologies.
Basic validation and data input will be done on frontend, after that data will be sent to backend via exposed REST endpoints.
Also, we will validate data entry and present any potential error messages to user that system might throw. 


Reading
-------

*   [HTML5](https://dev.w3.org/html5/html-author/)
*   [CSS3](https://www.w3schools.com/cssref/)
*   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
*   [AngularJS](https://docs.angularjs.org/api)
*   [Bootstrap](http://getbootstrap.com/getting-started/)


Concepts
--------

*   Laying the foundation structure with HTML5, high level components like edit fields, buttons, lists etc.
*   Adding basic styling with CSS3
*   Writing client-side to add interactive behaviour with AngularJS and also to initialize REST client which be used to
 exchange with backend
*   Adding styling to menu/menu-items and buttons with Bootstrap


Step 1 - Add initial frontend setup structure
------------------------------------------------------------------

1.  Add index.html (All frontend resources are located in src/main/java/resources/static)
 This file represents entry point for frontend operations.
2.  Add app.js for AngularJS module, and main.css for styling
3.  Add bower.json (in which you'll define dependecies for Bootstrap, AngularJS etc) and .bowerrc
4.  Add mainRoute.js (for which you'll define the routes for controllers)

Step 2 - Add view - Category
-------------------------------
1.  Add page categories (this will provide basic view for managing categories)
2.  Add controller for category
3.  Add service for category

Step 3 - Add view - Book
-------------------------------
1.  Add page book (this will provide basic view for managing books)
2.  Add controller for book
3.  Add service for category

Step 4 - Add main view (First page in which the books will be presented)
------------------------------------------------------------------------

1.  Add main.html
2.  Add controller for main page

Step 5 - Final touch - Navigation bar, footer and header
--------------------------------------------------------

1.  Add nav-bar.html (in which you'll define accesable items)
2.  Add footer (inlcude company info and year) and header (for basic title)

