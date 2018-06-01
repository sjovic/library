webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_books_component__ = __webpack_require__("./src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_3__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_4__books_books_component__["a" /* BooksComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<library-header></library-header>\n<div class=\"container\" style=\"min-height: calc(100vh - 153px)\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<library-footer></library-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_auth_service__ = __webpack_require__("./src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__books_books_component__ = __webpack_require__("./src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__categories_category_service__ = __webpack_require__("./src/app/categories/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__books_book_service__ = __webpack_require__("./src/app/books/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_category_list_category_list_component__ = __webpack_require__("./src/app/home/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_book_list_book_list_component__ = __webpack_require__("./src/app/home/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__filter_books_by_category_pipe__ = __webpack_require__("./src/app/filter-books-by-category.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_10__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_category_list_category_list_component__["a" /* CategoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__filter_books_by_category_pipe__["a" /* FilterBooksByCategoryPipe */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__categories_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_12__books_book_service__["a" /* BookService */],
                __WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, isbn, category, title, author, publishDate) {
        this.id = id;
        this.isbn = isbn;
        this.category = category;
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/books/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_auth_service__ = __webpack_require__("./src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = /** @class */ (function () {
    function BookService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.API = 'http://localhost:8080/books';
        this.HEADERS = { headers: this.authService.getAuthHeaders() };
    }
    // Subscribe to Observable and assign response data to books array property
    BookService.prototype.getBooks = function () {
        var _this = this;
        return this.httpClient.get(this.API, this.HEADERS)
            .subscribe(function (books) { return _this.books = books; }, function (error) { return console.error('Failed to get books!'); });
    };
    // Update book if book already has an ID, save it otherwise and return Observable
    BookService.prototype.saveBook = function (book) {
        if (book.id) {
            return this.httpClient.put(this.API, book, this.HEADERS);
        }
        return this.httpClient.post(this.API, book, this.HEADERS);
    };
    // Delete book by ID and return Observable
    BookService.prototype.deleteBook = function (bookId) {
        return this.httpClient.delete(this.API + '/' + (bookId), this.HEADERS);
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-bordered\">\n          <thead>\n              <tr>\n                  <th scope=\"col\" class=\"text-center align-middle\">#</th>\n                  <th scope=\"col\" class=\"text-center align-middle\">Category</th>\n                  <th scope=\"col\" class=\"text-center align-middle\">ISBN</th>\n                  <th scope=\"col\" class=\"text-center align-middle\">Name</th>\n                  <th scope=\"col\" class=\"text-center align-middle\">Author</th>\n                  <th scope=\"col\" class=\"text-center align-middle\">Publish date</th>\n                  <th scope=\"col\" class=\"text-center align-middle\">Edit</th>\n                  <th scope=\"col\" class=\"text-center align-middle\">Delete</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor='let book of bookService.books; let i = index'>\n                  <th scope=\"row\" class=\"text-center align-middle\">{{ i + 1 }}</th>\n                  <td class=\"text-center align-middle\">{{ book.category.name }}</td>\n                  <td class=\"text-center align-middle\">{{ book.isbn }}</td>\n                  <td class=\"text-center align-middle\">{{ book.title }}</td>\n                  <td class=\"text-center align-middle\">{{ book.author }}</td>\n                  <td class=\"text-center align-middle\">{{ book.publishDate | date:'dd. MMM yyyy.' }}</td>\n                  <td class=\"text-center align-middle\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"onBookEdit(book)\" data-toggle=\"modal\" data-target=\"#saveBookModal\">\n                      Edit\n                    </button>\n                  </td>\n                  <td class=\"text-center align-middle\">\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onBookDelete(book)\" data-toggle=\"modal\" data-target=\"#deleteBookModal\">\n                      Delete\n                    </button>\n                  </td>\n              </tr>\n          </tbody>\n      </table>\n  </div>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"float-right\">\n            <button type=\"button\" class=\"btn btn-primary mr-2\" data-toggle=\"modal\" data-target=\"#saveBookModal\" (click)=\"onBookAdd()\">Add Book</button>\n        </div>\n    </div>\n</div>\n\n<!-- Delete Modal -->\n<div class=\"modal fade\" id=\"deleteBookModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteBookModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"deleteBookModalLabel\">Delete Book</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n                <p>Do you want to delete <i>{{selectedBook?.title}}</i>, by <i>{{selectedBook?.author}}</i>?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onBookDeleteSubmit()\">Submit</button>\n        </div>\n        </div>\n    </div>\n</div>\n\n<!-- Save Modal -->\n<div class=\"modal fade\" id=\"saveBookModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"saveBookModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"saveBookModalLabel\">Add Book</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <form (ngSubmit)=\"onBookSaveSubmit(f, c)\" #f=\"ngForm\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col\" ngFormGroup>\n                            <div class=\"form-group\">\n                                <label for=\"category\">Categoy</label>\n                                <select class=\"form-control\" id=\"category\" name=\"category\" [compareWith]=\"compareFn\" [ngModel]=\"selectedBook.category\" required #category [ngClass]=\"{'is-invalid': category.invalid && (category.dirty || category.touched)}\">\n                                    <option [ngValue]=\"null\" disabled>Please select category</option>\n                                    <option *ngFor=\"let category of categoryService.categories\" [ngValue]=\"category\">{{category.name}}</option>\n                                </select>\n                                <div class=\"invalid-feedback\" *ngIf=\"category.invalid && (category.dirty || category.touched)\">Please select category!</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"title\">Title</label>\n                                <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"selectedBook.title\" required #title=\"ngModel\" [ngClass]=\"{'is-invalid': error?.title || (title.invalid && (title.dirty || title.touched))}\">\n                                <div class=\"invalid-feedback\" *ngIf=\"title.invalid && (title.dirty || title.touched)\">Please enter book title!</div>\n                                <div *ngIf=\"error?.title\" class=\"invalid-feedback\">{{error.title}}</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"title\">Author</label>\n                                <input type=\"text\" class=\"form-control\" id=\"author\" name=\"author\" [(ngModel)]=\"selectedBook.author\" required #author=\"ngModel\" [ngClass]=\"{'is-invalid': author.invalid && (author.dirty || author.touched)}\">\n                                <div class=\"invalid-feedback\" *ngIf=\"author.invalid && (author.dirty || author.touched)\">Please enter author name!</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"publishDate\">Publish Date</label>\n                                <input type=\"date\" class=\"form-control\" id=\"publishDate\" name=\"publishDate\" max=\"getCurrentDate()\" [(ngModel)]=\"selectedBook.publishDate\" required #publishDate=\"ngModel\" [ngClass]=\"{'is-invalid':  error?.publishDate || (publishDate.invalid && (publishDate.dirty || publishDate.touched))}\">\n                                <div class=\"invalid-feedback\" *ngIf=\"publishDate.invalid && (publishDate.dirty || publishDate.touched)\">Please select publish date!</div>\n                                <div *ngIf=\"error?.publishDate\" class=\"invalid-feedback\">{{error.publishDate}}</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"isbn\">ISBN</label>\n                                <input type=\"text\" class=\"form-control\" id=\"isbn\" name=\"isbn\" [(ngModel)]=\"selectedBook.isbn\" required #isbn=\"ngModel\" [ngClass]=\"{'is-invalid': error?.isbn || (isbn.invalid && (isbn.dirty || isbn.touched))}\">\n                                <div class=\"invalid-feedback\" *ngIf=\"isbn.invalid && (isbn.dirty || isbn.touched)\">Please enter ISBN!</div>\n                                <div *ngIf=\"error?.isbn\" class=\"invalid-feedback\">{{error.isbn}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" #c>Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("./src/app/books/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_category_service__ = __webpack_require__("./src/app/categories/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_model__ = __webpack_require__("./src/app/books/book.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BooksComponent = /** @class */ (function () {
    function BooksComponent(bookService, categoryService) {
        this.bookService = bookService;
        this.categoryService = categoryService;
        this.selectedBook = new __WEBPACK_IMPORTED_MODULE_4__book_model__["a" /* Book */](null, null, null, null, null, null);
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.bookService.getBooks();
    };
    BooksComponent.prototype.onBookDelete = function (book) {
        this.selectedBook = book;
    };
    BooksComponent.prototype.onBookDeleteSubmit = function () {
        var _this = this;
        this.bookService.deleteBook(this.selectedBook.id)
            .subscribe(function () {
            _this.bookService.getBooks();
            _this.selectedBook = new __WEBPACK_IMPORTED_MODULE_4__book_model__["a" /* Book */](null, null, null, null, null, null);
        }, function (error) { return console.error(error); });
    };
    BooksComponent.prototype.onBookAdd = function () {
        this.operation = 'Add';
        this.saveBookForm.reset({ publishDate: this.getCurrentDate() });
        this.error = null;
    };
    BooksComponent.prototype.onBookEdit = function (book) {
        this.operation = 'Edit';
        this.selectedBook = JSON.parse(JSON.stringify(book));
        this.error = { title: null, isbn: null, publishDate: null };
    };
    BooksComponent.prototype.onBookSaveSubmit = function (form, closeButton) {
        var _this = this;
        var book = new __WEBPACK_IMPORTED_MODULE_4__book_model__["a" /* Book */](this.operation === 'Add' ? null : this.selectedBook.id, form.value.isbn, form.value.category, form.value.title, form.value.author, form.value.publishDate);
        this.bookService.saveBook(book)
            .subscribe(function () {
            _this.bookService.getBooks();
            closeButton.click();
        }, function (httpErrorResponse) {
            _this.error = { title: null, isbn: null, publishDate: null };
            httpErrorResponse.error.exceptions.forEach(function (element) {
                _this.errorHandler(element);
            });
            // console.error(error);
        });
    };
    BooksComponent.prototype.errorHandler = function (error) {
        switch (error.field) {
            case 'title':
                this.error.title = this.capitalize(error.message);
                break;
            case 'isbn':
                this.error.isbn = this.capitalize(error.message);
                break;
            case 'publishDate':
                this.error.publishDate = this.capitalize(error.message);
                break;
        }
    };
    BooksComponent.prototype.capitalize = function (text) {
        return text[0].toUpperCase() + text.slice(1) + '!';
    };
    BooksComponent.prototype.getCurrentDate = function () {
        return (new Date()).toISOString().slice(0, 10);
    };
    BooksComponent.prototype.compareFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], BooksComponent.prototype, "saveBookForm", void 0);
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library-books',
            template: __webpack_require__("./src/app/books/books.component.html"),
            styles: [__webpack_require__("./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__categories_category_service__["a" /* CategoryService */]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Table -->\n<div class=\"row\">\n  <div class=\"col\">\n      <div class=\"table-responsive\">\n          <table class=\"table table-bordered\">\n              <thead>\n                  <tr>\n                      <th scope=\"col\" class=\"text-center align-middle\">#</th>\n                      <th scope=\"col\" class=\"text-center align-middle\">Category</th>\n                      <th scope=\"col\" class=\"text-center align-middle\">Edit</th>\n                      <th scope=\"col\" class=\"text-center align-middle\">Delete</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor='let category of categoryService.categories; let i = index'>\n                      <th scope=\"row\" class=\"text-center align-middle\">{{ i + 1 }}</th>\n                      <td class=\"text-center align-middle\">{{ category.name }}</td>\n                      <td class=\"text-center align-middle\">\n                        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"onCategoryEdit(category)\"  data-toggle=\"modal\" data-target=\"#saveCategoryModal\">\n                          Edit\n                        </button>\n                      </td>\n                      <td class=\"text-center align-middle\">\n                          <span class=\"d-inline-block\" tabindex=\"0\" data-toggle=\"tooltip\" [attr.title]='ifCategoryExists(category)?\"Category is in use!\":null'>\n                              <button type=\"button\" class=\"btn btn-danger\" [disabled]=\"ifCategoryExists(category)\" (click)=\"onCategoryDelete(category)\"  data-toggle=\"modal\" data-target=\"#deleteCategoryModal\">\n                                Delete\n                              </button>\n                          </span>\n                      </td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"float-right\">\n            <button type=\"button\" class=\"btn btn-primary mr-2\" data-toggle=\"modal\" data-target=\"#saveCategoryModal\" (click)=\"onCategoryAdd()\">\n              Add Category\n            </button>\n        </div>\n    </div>\n</div>\n\n<!-- Delete Modal -->\n<div class=\"modal fade\" id=\"deleteCategoryModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteCategoryModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"deleteCategoryModalLabel\">Delete Category</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>Do you want to delete <i>{{selectedCategory?.name}}</i> ?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onCategoryDeleteSubmit()\">Submit</button>\n        </div>\n        </div>\n    </div>\n</div>\n\n<!-- Save Modal -->\n<div class=\"modal fade\" id=\"saveCategoryModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"saveCategoryModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"saveCategoryModalLabel\">{{operation}} Category</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <form (ngSubmit)=\"onCategorySaveSubmit(f, c)\" #f=\"ngForm\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"form-group\">\n                                <label for=\"category\">Name</label>\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"  [(ngModel)]=\"selectedCategory.name\" required #name=\"ngModel\" [ngClass]=\"{'is-invalid': error?.name || (name.invalid && (name.dirty || name.touched))}\">\n                                <div class=\"invalid-feedback\" *ngIf=\"name.invalid && (name.dirty || name.touched)\">Please enter category name!</div>\n                                <div *ngIf=\"error?.name\" class=\"invalid-feedback\">{{error.name}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" #c>Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__("./src/app/categories/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_book_service__ = __webpack_require__("./src/app/books/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService, bookService) {
        this.categoryService = categoryService;
        this.bookService = bookService;
        this.selectedCategory = { id: null, name: null };
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.categoryService.getCategories();
        this.bookService.getBooks();
    };
    CategoriesComponent.prototype.onCategoryDelete = function (category) {
        this.selectedCategory = category;
    };
    CategoriesComponent.prototype.onCategoryDeleteSubmit = function () {
        var _this = this;
        this.categoryService.deleteCategory(this.selectedCategory.id)
            .subscribe(function () {
            _this.categoryService.getCategories();
            _this.selectedCategory = { id: null, name: null };
        }, function (error) { return console.error(error); });
    };
    CategoriesComponent.prototype.ifCategoryExists = function (categoryToDelete) {
        return this.bookService.books.some(function (book) { return book.category.id === categoryToDelete.id; });
    };
    CategoriesComponent.prototype.onCategoryAdd = function () {
        this.operation = 'Add';
        this.saveCategoryForm.reset();
        this.error = null;
    };
    CategoriesComponent.prototype.onCategoryEdit = function (category) {
        this.operation = 'Edit';
        this.selectedCategory = JSON.parse(JSON.stringify(category));
        this.error = null;
    };
    CategoriesComponent.prototype.onCategorySaveSubmit = function (form, closeButton) {
        var _this = this;
        this.categoryService.saveCategory({
            id: this.operation === 'Add' ? null : this.selectedCategory.id,
            name: form.value.name
        })
            .subscribe(function () {
            _this.categoryService.getCategories();
            closeButton.click();
        }, function (httpErrorResponse) {
            _this.error = { name: null };
            httpErrorResponse.error.exceptions.forEach(function (element) {
                _this.errorHandler(element);
            });
            // console.error(error);
        });
    };
    CategoriesComponent.prototype.errorHandler = function (error) {
        switch (error.field) {
            case 'name':
                this.error.name = this.capitalize(error.message);
                break;
        }
    };
    CategoriesComponent.prototype.capitalize = function (text) {
        return text[0].toUpperCase() + text.slice(1) + '!';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], CategoriesComponent.prototype, "saveCategoryForm", void 0);
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library-categories',
            template: __webpack_require__("./src/app/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_3__books_book_service__["a" /* BookService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_auth_service__ = __webpack_require__("./src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.API = 'http://localhost:8080/categories';
        this.HEADERS = { headers: this.authService.getAuthHeaders() };
    }
    // Subscribe to Observable and assign response data to categories array property
    CategoryService.prototype.getCategories = function () {
        var _this = this;
        return this.httpClient.get(this.API, this.HEADERS)
            .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return console.error('Failed to get categories!'); });
    };
    // Update category if book already has an ID, save it otherwise and return Observable
    CategoryService.prototype.saveCategory = function (category) {
        if (category.id) {
            return this.httpClient.put(this.API, category, this.HEADERS);
        }
        return this.httpClient.post(this.API, category, this.HEADERS);
    };
    // Delete category by ID and return Observable
    CategoryService.prototype.deleteCategory = function (categoryId) {
        return this.httpClient.delete(this.API + '/' + (categoryId), this.HEADERS);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/filter-books-by-category.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterBooksByCategoryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterBooksByCategoryPipe = /** @class */ (function () {
    function FilterBooksByCategoryPipe() {
    }
    FilterBooksByCategoryPipe.prototype.transform = function (books, categoryId) {
        if (categoryId) {
            return books.filter(function (book) { return book.category.id === categoryId; });
        }
        return books;
    };
    FilterBooksByCategoryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filterBooksByCategory'
        })
    ], FilterBooksByCategoryPipe);
    return FilterBooksByCategoryPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"card-footer text-muted text-center\">\n      Levi9 &copy; 2018\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-5\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Library</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <ng-template [ngIf]=\"authService.isAuthenticated()\">\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n          </li>\n        </ng-template>        \n        <ng-template [ngIf]=\"authService.hasRoleAdmin()\">                    \n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/categories\">Categories</a>\n          </li>\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/books\">Books</a>\n          </li>\n        </ng-template>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <ng-template [ngIf]=\"!authService.isAuthenticated()\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>\n        </ng-template>\n        <ng-template [ngIf]=\"authService.isAuthenticated()\">\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ authService.getUsername() }}\n            </a>\n            <div class=\"dropdown-menu  dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <a class=\"dropdown-item\" (click)=\"authService.logout()\" routerLink=\"/\">Logout</a>\n            </div>\n          </li>\n        </ng-template>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_auth_service__ = __webpack_require__("./src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'library-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__login_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/book-list/book-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/book-list/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n      <div class=\"table-responsive\">\n          <table class=\"table table-bordered\">\n              <thead>\n                  <tr>\n                      <th scope=\"col\" class=\"text-center align-middle\">#</th>\n                      <th scope=\"col\" class=\"text-center align-middle\">Name</th>\n                      <th scope=\"col\" class=\"text-center align-middle\">Image</th>\n                      <th scope=\"col\" class=\"text-center align-middle\">Author</th>\n                      <th scope=\"col\" class=\"text-center align-middle\">Publish date</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor='let book of (bookService.books | filterBooksByCategory: selectedCategoryId); let i = index'>\n                      <th scope=\"row\" class=\"text-center align-middle\">{{ i + 1 }}</th>\n                      <td class=\"text-center align-middle\">{{ book.title }}</td>\n                      <td class=\"text-center align-middle\"><img src=\"assets/images/placeholder.jpg\" alt=\"placeholder\" class=\"img-thumbnail\"></td>\n                      <td class=\"text-center align-middle\">{{ book.author }}</td>\n                      <td class=\"text-center align-middle\">{{ book.publishDate | date:'dd. MMM yyyy.' }}</td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/book-list/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_book_service__ = __webpack_require__("./src/app/books/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService) {
        this.bookService = bookService;
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], BookListComponent.prototype, "selectedCategoryId", void 0);
    BookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library-book-list',
            template: __webpack_require__("./src/app/home/book-list/book-list.component.html"),
            styles: [__webpack_require__("./src/app/home/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__books_book_service__["a" /* BookService */]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/home/category-list/category-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"list-group mb-4 mt-3 mt-lg-0\">\n      <button type=\"button\" [ngClass]=\"{active: selectedCategoryId === null}\" class=\"btn btn-outline-secondary list-group-item\" (click)=\"onCategorySelect(null)\">All</button>\n      <button *ngFor='let categroy of categoryService.categories' type=\"button\"[ngClass]=\"{active: selectedCategoryId === categroy.id}\" class=\"btn btn-outline-secondary list-group-item\" (click)=\"onCategorySelect(categroy.id)\">{{ categroy.name }}</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_category_service__ = __webpack_require__("./src/app/categories/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(categoryService) {
        this.categoryService = categoryService;
        this.categorySelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectedCategoryId = null;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
    };
    CategoryListComponent.prototype.onCategorySelect = function (categoryId) {
        this.selectedCategoryId = categoryId;
        if (!categoryId) {
            this.categorySelected.emit(null);
        }
        this.categorySelected.emit(categoryId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "categorySelected", void 0);
    CategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library-category-list',
            template: __webpack_require__("./src/app/home/category-list/category-list.component.html"),
            styles: [__webpack_require__("./src/app/home/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__categories_category_service__["a" /* CategoryService */]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-5\">Library</h1>\n        <p class=\"lead\">\n            Library is simple web application design to represent virtual library. \n            Project was intentionally kept simple ie. it has only few entities but it shows usage of modern web java technologies.\n        </p>\n        <hr class=\"my-4\">\n        <p>Project will be organized in several sections (named steps) where each one represents the final stage of the finished section.</p>\n        <p class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" href=\"https://github.com/sjovic/library\" role=\"button\">Learn more</a>\n        </p>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-9\">\n    <library-book-list [selectedCategoryId]=\"selectedCategoryId\"></library-book-list>\n  </div>\n  <div class=\"col-lg-3\">\n    <library-category-list (categorySelected)=\"selectCategory($event)\"></library-category-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_category_service__ = __webpack_require__("./src/app/categories/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_book_service__ = __webpack_require__("./src/app/books/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(bookService, categoryService) {
        this.bookService = bookService;
        this.categoryService = categoryService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.bookService.getBooks();
        this.categoryService.getCategories();
    };
    HomeComponent.prototype.selectCategory = function (categoryId) {
        this.selectedCategoryId = categoryId;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__books_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_1__categories_category_service__["a" /* CategoryService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // tslint:disable-line
var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.authenticated = false;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var base64Credential = btoa(username + ':' + password);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ authorization: 'Basic ' + base64Credential });
        return this.httpClient.get('http://localhost:8080/user', { headers: headers })
            .map(function (user) {
            _this.headers = headers;
            _this.authenticated = true;
            return _this.user = user;
        })
            .catch(function (httpErrorResponse) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(httpErrorResponse);
        });
    };
    AuthService.prototype.getAuthHeaders = function () {
        return this.headers;
    };
    AuthService.prototype.getUsername = function () {
        if (this.user) {
            return this.user.username;
        }
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    AuthService.prototype.hasRoleAdmin = function () {
        if (this.user) {
            return this.user.roles.includes('ROLE_ADMIN');
        }
    };
    AuthService.prototype.logout = function () {
        this.authenticated = false;
        this.user = null;
        this.headers = null;
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4\">\n    <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" ngModel >\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" ngModel>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\n        Bad credentials!\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\">Sign In</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        var username = form.value.username;
        var password = form.value.password;
        this.authService.login(username, password)
            .subscribe(function (user) { _this.router.navigate(['/home']); }, function (error) {
            _this.error = error;
            // console.error(error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'library-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map