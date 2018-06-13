
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
4. Add paths to the bootstrap, jquery and popper.js JavaScrip files into "scripts" array in ".angular-cli.json" file:
	* "../node_modules/jquery/dist/jquery.js",
	* "../node_modules/popper.js/dist/umd/popper.js",
	* "../node_modules/bootstrap/dist/js/bootstrap.js"
5. Place image in "src/assets/images" folder.
6. Generate components "header", "footer", "home", "books", "categories" using angular-cli (with "ng generate component \<component-name\>).
7. You can run application from command line in application folder with "ng serve" (shorthand "ng s", or alternatively with "npm start" which will call command that is defined inside package.jason, which in case of angular application, generated with cli, is "ng serve").

Step 2 - Define routes for the application
-------------------------------
1. Create "app-routing.module.ts" file in src/app folder ("ng generate module app-routing --flat" command) and define routes for all components.
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
2. Create category service (with "ng generate service \<service-name\>"), inject HttpClient from "@angular/common/http" and add functions to save, delete and get categories from REST api that will return observable.
3. Create book service, inject HttpClient from "@angular/common/http" and add functions to save, delete and get books from REST api that will return observable. 
4. Add created services to "app.module.ts" providers array.

Step 6 - Generate additional nested components inside Home component and add HTML to the template of Home component and nested components
-------------------------------
1. Generate  "category-list" component inside home component ("ng generate component home/category-list").
2. Inject "CategoryService" into "category-list.component.ts" via constructor and initialize "categories$" variable in "ngOnInit()" method with Observable returned by "getCategories()" method.
3. Add HTML code to it’s template file that will display categories from Observable with "async" pipe.
4. Generate  "book-list" component inside home component ("ng generate component home/book-list").
5. Inject "BookService" into "book-list.component.ts" via constructor and initialize "books$" variable in "ngOnInit()" method with Observable returned by "getBooks()" method.
6. Add HTML code to it’s template file that will display categories from Observable with "async" pipe.
7. Add initial HTML code in home component template file with application description and link to it's github page.
8. Add category-list and book-list component (by it’s selector as HTML element) to the "home.component.html" file and define their layout with bootstrap grid.

Step 7 - Create filter pipe for book list
-------------------------------
1. Generate "filter-books-by-category" pipe ("ng generate pipe filter-books-by-category") and add filter logic to the transform function that will return array of filtered books by the category ID that is passed as an argument to this function.
2. Add "onCategorySelect" function in category-list.component.ts that will emit event when category is selected from the list and define "EventEmitter" with  "@Output()" so we can bind to it in the parents component template file and receive selected category ID.
3. In category-list template file call "onCategorySelect" function and pass ID of the category and set "active" css class based on selected category with property binding on "ngClass" directive.
4. In home component template file (parent of category-list component) bind to "categorySelected" event and pass "$event" to selectCategory function and define it in "home.component.ts" file.
5. In "book-list.component.ts" add "selectedCategoryId" with "@Input() decorator and bind it to the "selectedCategoryId" in the parent component template file.
6. Finally add "filter-books-by-category" pipe in the book list template file.

Step 8 - Add initial HTML to the template of Category and Book component
-------------------------------
1. Add initial HTML code, in categories component template file, for displaying list of categories in a table with Add, Edit and Delete buttons
2. Inject "CategoryService" into "categories.component.ts" via constructor and initialize "categories$" variable with Observable returned by "getCategories()" service method.
3. Add initial HTML code, in books component template file, for displaying list of books in a table  with Add, Edit and Delete buttons
4. Inject "BookService" into "books.component.ts" via constructor and initialize "books$" variable with Observable returned by "getBooks()" service method.

Assignment
-------------------------------
1. Create "404 - Page not found" page for not existing routs.
2. Add appropriate route in routing module for created component, and redirect all not existing routes to that route.