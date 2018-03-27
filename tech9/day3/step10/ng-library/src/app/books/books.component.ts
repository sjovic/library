import { Component, OnInit, ElementRef } from '@angular/core';

import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  selector: 'library-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
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
}
