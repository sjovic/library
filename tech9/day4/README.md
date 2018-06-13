
Day 4 Frontend: HTML5, CSS3, Bootstrap, Angular, Form Validation, Error messages
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

Step 1 - Add HTML and TypeScript code for deleting books and categories
-------------------------------
1. Add delete modal dialog in books template to confirm deleting of the selected book.
2. Add action for opening dialog and passing selected book on Delete button click in table.
3. Add function for getting selected book for deletion and assign it to "selectedBook" variable.
4. Add function that will delete selected book by calling delete function from services and update list of books if successfully deleted by backend.
5. Add delete modal dialog in categories template to confirm deleting of the  selected category.
6. Add action for opening dialog and passing selected category on Delete button click in table.
7. Add function for getting selected category for deletion and assign it to "selectedCategory" variable.
8. Add function that will delete selected category by calling delete function from services and update list of categories if successfully deleted by backend.
9. Add function to prevent from deleting category that is assigned to a book (initialize "books" variable with "getBooks()" method from book service in "ngOnInit()").
10. Bind result of "ifCategoryExists" function  to "disabled" attribute in categories template. 

Step 2 - Add save modal for adding new categories
-------------------------------
1. Add "FormsModule" to "app.module.ts" file imports array.
2. Add modal dialog with form element, in "categories.component.html", for adding new category.
3. Add function for resetting form on "Add Category" button click.
4. Add function for submitting angular form data and pass it to the category service save function.
5. Add error handling function and validation for form input elements.

Step 3 - Add functionality for editing categories
-------------------------------
1. Add "operation" property for determining if save modal is used for adding or editing category.
2. Add function for getting selected category data on "Edit" button click.
3. Modify function for submitting angular form data, based on "operation" property, and pass it to the category service save function.

Step 4 - Add save modal for adding new books
-------------------------------
1. Add modal dialog with form element, in "books.component.html", for adding new book.
2. Add function for resetting form on "Add Book" button click.
3. Add function for submitting angular form data and pass it to the book service save function.
4. Add error handling function and validation for form input elements.

Step 5 - Add functionality for editing books
-------------------------------
1. Add "operation" property for determining if save modal is used for adding or editing book.
2. Add function for getting selected book data on "Edit" button click.
3. Modify function for submitting angular form data, based on "operation" property, and pass it to the book service save function.

Step 6 - Refactor cross component communication when filtering books by category 
(use Subject in service instead of using event and property bindings in components)
-------------------------------
1. Delete "categorySelected" event emitter from "category-list.component.ts".
2. Add "categoryFilterChanged" Subject property in category service.
3. In "category-list.component.ts" on "onCategorySelect()" method call "categoryFilterChanged.next()" from category service and pass selected categoryId.
4. In "book-list.component.ts" remove @Input() decorator from "selectedCategoryId" and inject category service into component.
5. On "ngOnInit()" method subscribe to "categoryFilterChanged" from category service and assign value emitted to "selectedCategoryId" property.
6. Remove "selectedCategory()" method and "selectedCategoryId" property from "home.component.ts".
7. Remove "[selectedCategoryId]" property binding and "(categorySelected)" event binding from "home.component.html".