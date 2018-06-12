import { Book } from './../../books/book.model';
import { Component, OnInit, Input } from '@angular/core';

import { BookService } from './../../books/book.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'library-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  @Input() selectedCategoryId: number;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

}
