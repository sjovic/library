import { Book } from './book.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { BookService } from './book.service';

@Component({
  selector: 'library-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

}
