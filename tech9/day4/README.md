
Day 4 Frontend: Modals, Forms and Form Validation, Error messages, Subject
==================================================================================

Designing frontend presentation
-------------------------------

Today we will be working on basic validation and data input on frontend. 
After that data will be sent to backend via exposed REST endpoints.
Also, we will validate data entry and present any potential error messages to user that system might throw. 

Reading
-------

*   [HTML5](https://dev.w3.org/html5/html-author/)
*   [CSS3](https://www.w3schools.com/cssref/)
*   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
*   [TypeScript](https://www.typescriptlang.org/docs)
*   [Angular](https://angular.io/docs)
*   [RxJS](https://rxjs-dev.firebaseapp.com/)
*   [Bootstrap](https://getbootstrap.com/docs)

Concepts
--------

*   Laying the foundation structure with HTML5, high level components like edit fields, buttons, lists etc.
*   Adding styling with Bootstrap and CSS3
*   Writing REST client-side to add interactive behaviour with Angular, which will be used to exchange data with backend

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
2. Add modal dialog with form and input element, in "categories.component.html", for adding new category.
3. Add "ngModel" directive to the input element and define name attribute so that this element can be recognized as form control by angular.
4. Create local reference to "ngForm" that will be passed on submitting the form on "ngSubmit" event triggered by button of type submit.
5. Create local reference to "ngModal" of the input element so that we can display validation errors if input value is invalid.
6. Add reference to "NgForm" with "@ViewChild()" decorator.
7. Create "onCategoryAdd()" method in "categories.component.ts" for resetting form and error on "Add Category" button click.
8. Call "onCategoryAdd()" method and add trigger to show save category modal when clicking on "Add Category" button.
9. Add function for submitting angular form data, pass it to the category service save function and update list of categories if successfully saved by backend.
10. Add error handling functions.

Step 3 - Add functionality for editing categories
-------------------------------
1. In "categories.component.ts" create "onCategoryEdit()" method for getting selected category data passed when clicking on "Edit" button.
2. In categories template file call "onCategoryEdit()" method and add trigger to show save category modal when clicking on "Edit" button.
3. Modify input element by passing value from "selectedCategory" to "ngModel" by using two-way data binding. 
4. Add "operation" property in "categories.component.ts" for determining if save modal is used for adding or editing category.
5. Assign value "Add" to "operation" property in "onCategoryAdd()" and value "edit" in "onCategoryEdit()" method.
6. Modify function for submitting angular form data, based on "operation" property (with or without id), and pass it to the category service save function.

Step 4 - Add save modal for adding new books
-------------------------------
1. Add modal dialog with form and input element, in "books.component.html", for adding new book.
2. Add select element with options that will list categories and bind each category to "ngValue".
3. Add "ngModel" directive to the input elements and define name attributes so that this elements can be recognized as form controls by angular.
4. Create local reference to "ngForm" that will be passed on submitting the form on "ngSubmit" event triggered by button of type submit.
5. Create local references to "ngModal" of the input elements so that we can display validation errors if input values are invalid.
6. Add reference to "NgForm" with "@ViewChild()" decorator.
7. Create "onBookAdd()" method in "books.component.ts" for resetting form and error on "Add Book" button click.
8. Call "onBookAdd()" method and add trigger to show save book modal when clicking on "Add Book" button.
9. Add function for submitting angular form data, pass it to the book service save function and update list of books if successfully saved by backend.
10. Add error handling functions.

Step 5 - Add functionality for editing books
-------------------------------
1. In "books.component.ts" create "onBookEdit()" method for getting selected book data passed when clicking on "Edit" button.
2. In books template file call "onBookEdit()" method and add trigger to show save book modal when clicking on "Edit" button.
3. Modify input element by passing value from "selectedBook" to "ngModel" by using two-way data binding. 
4. With property binding bind "selectedBook.category" with "ngModel" of the select element.
5. Bind "compareWith" directive to compareFn function that will compare by id category in selectedBook with those in select element.
6. Add "operation" property in "books.component.ts" for determining if save modal is used for adding or editing book.
7. Assign value "Add" to "operation" property in "onBookAdd()" and value "edit" in "onBookEdit()" method.
8. Modify function for submitting angular form data, based on "operation" property (with or without id), and pass it to the book service save function.

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

Assignment
-------------------------------
1. Create "Contact" page with form element and input fields.
2. Form should have input fields for entering user email and massage and button for submitting form.
3. Display values from input fields with "console.log" or in alert window after the form is submitted.
4. Add form validation to prevent submitting the form and displaying error message if email is not valid and/or message is empty.
5. Add appropriate route in routing module for created component, and add link to that route in header component.