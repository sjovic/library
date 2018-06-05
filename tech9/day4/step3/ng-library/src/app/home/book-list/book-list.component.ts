import { Component, OnInit, Input } from '@angular/core';

import { BookService } from './../../books/book.service';

@Component({
  selector: 'library-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() selectedCategoryId: number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
