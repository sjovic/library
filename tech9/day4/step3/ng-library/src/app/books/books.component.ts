import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef } from '@angular/core';

import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  selector: 'library-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>;
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

  onBookDelete(book: Book) {
    this.selectedBook = book;
  }

  onBookDeleteSubmit() {
    this.bookService.deleteBook(this.selectedBook.id)
      .subscribe(
        () => {
          this.books$ = this.bookService.getBooks();
          this.selectedBook = null;
        },
        (error) => console.error(error)
      );
  }
}
