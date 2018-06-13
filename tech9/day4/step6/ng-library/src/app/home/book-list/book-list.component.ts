import { CategoryService } from './../../categories/category.service';
import { Book } from './../../books/book.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { BookService } from './../../books/book.service';

@Component({
  selector: 'library-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  selectedCategoryId: number;

  constructor(private bookService: BookService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
    this.categoryService.categoryFilterChanged.subscribe(
      (selectedCategoryId) => {
        this.selectedCategoryId = selectedCategoryId;
      }
    );
  }

}
