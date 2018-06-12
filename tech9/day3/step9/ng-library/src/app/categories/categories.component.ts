import { Book } from './../books/book.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from './category.service';
import { BookService } from './../books/book.service';
import { Category } from './category.model';

@Component({
  selector: 'library-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]>;
  selectedCategory: Category;
  books: Book[];

  constructor(private categoryService: CategoryService, private bookService: BookService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
    this.bookService.getBooks().subscribe(
      (books) => {
        this.books = books;
      }
    );
  }

  onCategoryDelete(category: Category) {
    this.selectedCategory = category;
  }

  onCategoryDeleteSubmit() {
    this.categoryService.deleteCategory(this.selectedCategory.id)
    .subscribe(
      () => {
        this.categories$ = this.categoryService.getCategories();
        this.selectedCategory = null;
      },
      (error) => console.error(error)
    );
  }

  ifCategoryExists(categoryToDelete: Category): boolean {
    if (this.books) {
      return this.books.some((book) => book.category.id === categoryToDelete.id);
    }
    return false;
  }
}
