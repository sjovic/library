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
  selectedCategory: Category;

  constructor(private categoryService: CategoryService, private bookService: BookService) { }

  ngOnInit() {
  }

  onCategoryDelete(category: Category) {
    this.selectedCategory = category;
  }

  onCategoryDeleteSubmit() {
    this.categoryService.deleteCategory(this.selectedCategory.id)
    .subscribe(
      () => {
        this.categoryService.getCategories();
        this.selectedCategory = null;
      },
      (error) => console.error(error)
    );
  }

  ifCategoryExists(categoryToDelete: Category): boolean {
    return this.bookService.books.some((book) => book.category.id === categoryToDelete.id);
  }
}
