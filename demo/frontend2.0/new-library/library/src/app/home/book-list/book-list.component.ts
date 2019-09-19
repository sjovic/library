import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Book } from 'src/app/book/book.model';
import { BookService } from 'src/app/book/book.service';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit, OnDestroy {

  books$: Book[];
  selectedCategoryId: number;
  categoryFilterSubscription: Subscription;

  constructor(private bookService: BookService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(
        (data) => {
          this.books$ = data;
        }
      );
    this.categoryFilterSubscription = this.categoryService.categoryChangedSubject.subscribe(
      (selectedCategoryId) => {
        this.selectedCategoryId = selectedCategoryId;
      }
    );
  }

  ngOnDestroy(): void {
    this.categoryFilterSubscription.unsubscribe();
  }

}
