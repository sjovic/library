
Day 3 Frontend: HTML5, CSS3, Bootstrap, Angular, Form Validation, Error messages
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
*   [TypeScript](https://www.typescriptlang.org/docs)
*   [Angular](https://angular.io/docs)
*   [Bootstrap](https://getbootstrap.com/docs)

Concepts
--------

*   Laying the foundation structure with HTML5, high level components like edit fields, buttons, lists etc.
*   Adding styling with Bootstrap and CSS3
*   Writing client-side to add interactive behaviour with Angular and also to initialize REST client which be used to exchange with backend

Step 0 - Initial setup
-------------------------------

1. Install VS Code.
2. Install Node.js.
3. Install Angular CLI with "npm install -g @angular/cli@1.7.3".
4. Add "@CrossOrigin" annotation for "http://localhost:4200" for each controller class in backend.

Step 1 - Add initial frontend setup structure
-------------------------------
1. Create new angular application using angular-cli (with "ng new \<application-name\> --prefix \<selector-prefix-name\>").
2. Install bootstrap, jquery and popper.js (with npm install --save \<dependency-name\>).
3. Add path to the bootstrap.css (from "../node_modules/bootstrap/dist/css/bootstrap.css") into "styles" array in ".angular-cli.json" file.
4. Add path to the bootstrap, jquery and popper.js JavaScrip files into "scripts" array in ".angular-cli.json" file:
	* "../node_modules/jquery/dist/jquery.js",
	* "../node_modules/popper.js/dist/umd/popper.js",
	* "../node_modules/bootstrap/dist/js/bootstrap.js"
5. Place image in "src/assets/images" folder.
6. Generate components "header", "footer", "home", "books", "categories" using angular-cli (with "ng generate component \<component-name\>).
7. You can run application from command line in application folder with "ng serve" (shorthand "ng s", or alternatively with "npm start" which will call command that is defined inside package.jason, which in case of angular application, generated with cli, is "ng serve").

Step 2 - Define routes for the application
-------------------------------
1. Create "app-routing.module.ts" file in src/app folder and define routes for all components.
2. Import "RouterModule" and pass routes to "forRoot" method in "@NgModule" decorators imports array.
3. Export configured "RouterModule" and add created module ("AppRoutingModule") to "app.module.ts" imports array.

Step 3 - Add header and footer template
-------------------------------
1. Add  footer template HTML to the "footer.component.html" and add footer component (by it’s selector as HTML element) to the "app.component.html".
2. Add  header template HTML with navigation bar to the "header.component.html" (add HTML code, bootstrap classes for styling, and define routes with "routerLink" for every navigation item).
3. Add header component (by it’s selector as HTML element) to the "app.component.html".
4. Add "router-outlet" HTML element to the "app.component.html".

Step 4 - Create models for Category and Book
-------------------------------
1. Create class for category model inside categories component folder (with "ng generate class \<path/class-name\>" and rename to "category.model.ts").
2. Add category properties and constructor.
3. Create class for book model inside books component folder.
4. Add book properties and constructor.

Step 5 - Create services for Category and Book
-------------------------------
1. Add "HttpClientModule" to the "app.module.ts" imports array from "@angular/common/http".
2. Create category service (with "ng generate service \<service-name\>"), inject HttpClient from "@angular/common/http" and add function to save, delete and get categories from REST api.
3. Create book service, inject HttpClient from "@angular/common/http" and add function to save, delete and get books from REST api. 
4. Add created services to "app.module.ts" providers array.

Step 6 - Add HTML to the template of Home component and generate additional nested components
-------------------------------
1. Add HTML code in home component template file.
2. Generate  "category-list" component inside home component, add HTML code to it’s template file and inject "BookService" into "book-list.component.ts" via constructor.
3. Generate  "book-list" component inside home component and add HTML code to it’s template file and inject "CategoryService" into "category-list.component.ts" via constructor.
4. Add category-list and book-list component (by it’s selector as HTML element) to the "home.component.html" file and define their layout with bootstrap grid.
5. Call functions for getting books and categories OnInit of home component from corresponding services to populate books and categories array (in services) so it can be displayed in book-list and category-list templates.

Step 7 - Create filter pipe for book list
-------------------------------
1. Generate "filter-books-by-category" pipe ("ng generate pipe filter-books-by-category") and add filter logic, to the transform function, that will return array of filtered books by the category ID that is passed as an argument to this function.
2. Add "onCategorySelect" function in category-list.component.ts that will emit event when category is selected from the list and define "EventEmitter" with  "@Output()" so we can bind to it in the parents component template file and receive selected category ID.
3. In category-list template file call "onCategorySelect" function and pass ID of the category and set "active" css class based on selected category with property binding on "ngClass" directive.
4. In home component template file (parent of category-list component) bind to "categorySelected" event and pass "$event" to selectCategory function and define it in "home.component.ts" file.
5. In "book-list.component.ts" add "selectedCategoryId" with "@Input() decorator and bind it to the "selectedCategoryId" in the parent component template file.
6. Finally add "filter-books-by-category" pipe in the book list template file.

Step 8 - Add initial HTML to the template of Category and Book component
-------------------------------
1. Add initial HTML code, in categories component template file, for displaying  list of categories in a table and inject "CategoryService" into "categories.component.ts" via constructor.
2. Add initial HTML code, in books component template file, for displaying  list of books in a table and inject "BookService" into "books.component.ts" via constructor.

Step 8 - Assignment
-------------------------------
1. Generate about component, add html content into html template file.
2. Add link for about page into header component and create appropriate route into routing module.

Step 9 - Add HTML and TypeScript code for deleting books and categories
-------------------------------
1. Add delete modal dialog in categories and books template.
2. Add function for getting selected category/book for deletion.
3. Add function that will delete selected category/book by calling delete function from services and update list of categories/books if successfully deleted by backend.
4. Add function to prevent from deleting category that is assigned to a book.
5. Bind result of "ifCategoryExists" function  to "disabled" attribute in categories template. 

Step 10 - Add save modal for adding new categories
-------------------------------
1. Add "FormsModule" to "app.module.ts" file imports array.
2. Add modal dialog with form element, in "categories.component.html", for adding new category.
3. Add function for resetting form on "Add Category" button click.
4. Add function for submitting angular form data and pass it to the category service save function.
5. Add error handling function and validation for form input elements.

Step 11 - Add functionality for editing categories
-------------------------------
1. Add "operation" property for determining if save modal is used for adding or editing category.
2. Add function for getting selected category data on "Edit" button click.
3. Modify function for submitting angular form data, based on "operation" property, and pass it to the category service save function.

Step 12 - Add save modal for adding new books
-------------------------------
1. Add modal dialog with form element, in "books.component.html", for adding new book.
2. Add function for resetting form on "Add Book" button click.
3. Add function for submitting angular form data and pass it to the book service save function.
4. Add error handling function and validation for form input elements.

Step 13 - Add functionality for editing books
-------------------------------
1. Add "operation" property for determining if save modal is used for adding or editing book.
2. Add function for getting selected book data on "Edit" button click.
3. Modify function for submitting angular form data, based on "operation" property, and pass it to the book service save function.