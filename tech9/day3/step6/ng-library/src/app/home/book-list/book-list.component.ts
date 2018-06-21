import { Book } from './../../books/book.model';
import { Component, OnInit } from '@angular/core';

import { BookService } from './../../books/book.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'library-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

}
