import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from './book.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../category/category.model';
import { BookService } from './book.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnInit {

  books$: Book[];
  categories$: Category[];
  selectedBook: Book;
  emptyBook: Book = {id: null, title: "", author: "", category: {id: null, name: ""}, isbn: "", publishDate: null}; 
  option: string;
  //error: {title: string, author: string, category: string, isbn: string, publishDate: string};
  error = false;

  selectedCategory: Category = null;

  constructor(private bookService: BookService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(
        (data) => {
          this.books$ = data;
        }
      );
    this.selectedBook = this.emptyBook;
    this.categoryService.getCategories()
        .subscribe(
          data => {
            this.categories$ = data;
          }
        );
  }

  onDelitBook(book: Book) {
    this.selectedBook = book;
  }

  onAddBook(form: NgForm) {
    this.error = false;
    this.option = "Add book";
    this.selectedBook = this.emptyBook;

    form.reset();
  }

  onEditBook(book: Book) {
    this.error = false;
    this.option = "Edit book";
    this.selectedBook = JSON.parse(JSON.stringify(book));
  }

  onBookDeleteSubmit() {
    this.bookService.deleteBook(this.selectedBook.id)
      .subscribe(
        () => {
          this.bookService.getBooks()
            .subscribe(
              data => {
                this.books$ = data;
              }
            );
          this.selectedBook = this.emptyBook;
        },
        (error) => console.error(error)
      );
  }

  onBookSaveSubmit(form: NgForm, closeButton: HTMLButtonElement) {
    var id = null;
    if(form.value.id != null && form.value.id !== "") {
      id = form.value.id;
    }

        for(var c of this.categories$) {
          if(c.name === form.value.category) {
            this.selectedCategory = c;
            break;  
          }
        }

    this.bookService.saveBook({id: id, title: form.value.title, author: form.value.author, category: this.selectedCategory, isbn: form.value.isbn, publishDate: form.value.publishDate})
      .subscribe(
        ()=> {
          this.selectedBook = this.emptyBook;
          this.bookService.getBooks()
            .subscribe(
              data => { this.books$ = data; }
            );
          closeButton.click();
        },
        (httpErrorResponse: HttpErrorResponse)=> {
            this.error = true;
            console.log(httpErrorResponse);
            // httpErrorResponse.error.exceptions.forEach(element => {
            //   this.errorHandler(element);
            // });
        }
      );
  }

  // errorHandler(error) {
  //   switch (error.field) {
  //     case 'title':
  //       this.error.title = this.capitalize(error.message);
  //       break;
  //     case 'isbn':
  //       this.error.isbn = this.capitalize(error.message);
  //       break;
  //     case 'publishDate':
  //       this.error.publishDate = this.capitalize(error.message);
  //       break;
  //   }
  // }

  // capitalize(text) {
  //   return text[0].toUpperCase() + text.slice(1) + '!';
  // }


}
