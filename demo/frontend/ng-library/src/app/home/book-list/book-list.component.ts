import { CategoryService } from './../../categories/category.service';
import { Book } from './../../books/book.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { BookService } from './../../books/book.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'library-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  selectedCategoryId: number;
  categoryFilterSubscription: Subscription;

  constructor(private bookService: BookService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
    this.categoryFilterSubscription = this.categoryService.categoryFilterChanged.subscribe(
      (selectedCategoryId) => {
        this.selectedCategoryId = selectedCategoryId;
      }
    );
  }

  ngOnDestroy(): void {
    this.categoryFilterSubscription.unsubscribe();
  }
}
