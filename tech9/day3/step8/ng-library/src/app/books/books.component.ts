import { Component, OnInit } from '@angular/core';

import { BookService } from './book.service';

@Component({
  selector: 'library-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks();
  }

}
