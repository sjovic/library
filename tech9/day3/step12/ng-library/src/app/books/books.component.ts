import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { BookService } from './book.service';
import { CategoryService } from './../categories/category.service';
import { Book } from './book.model';

@Component({
  selector: 'library-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChild('f') saveBookForm: NgForm;
  selectedBook: Book;
  error: { title: string, isbn: string, publishDate: string };

  constructor(private bookService: BookService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.bookService.getBooks();
  }

  onBookDelete(book: Book) {
    this.selectedBook = book;
  }

  onBookDeleteSubmit() {
    this.bookService.deleteBook(this.selectedBook.id)
      .subscribe(
        () => {
          this.bookService.getBooks();
          this.selectedBook = null;
        },
        (error) => console.error(error)
      );
  }

  onBookAdd() {
    this.saveBookForm.reset(
      {publishDate: this.getCurrentDate()}
    );
    this.error = null;
  }

  onBookSaveSubmit(form: NgForm, closeButton: HTMLButtonElement) {
    const book: Book = new Book(
      null,
      form.value.isbn,
      form.value.category,
      form.value.title,
      form.value.author,
      form.value.publishDate
    );
    this.bookService.saveBook(book)
      .subscribe(
        () => {
          this.bookService.getBooks();
          closeButton.click();
        },
        (httpErrorResponse: HttpErrorResponse) => {
          this.error = { title: null, isbn: null, publishDate: null  };
          httpErrorResponse.error.exceptions.forEach(element => {
            this.errorHandler(element);
          });
          // console.error(error);
        }
      );
  }

  errorHandler(error) {
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
  }

  capitalize(text) {
    return text[0].toUpperCase() + text.slice(1) + '!';
  }

  getCurrentDate() {
    return (new Date()).toISOString().slice(0, 10);
  }
}
