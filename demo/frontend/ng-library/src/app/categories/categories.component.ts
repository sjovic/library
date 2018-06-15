import { Book } from './../books/book.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

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
  @ViewChild('f') saveCategoryForm: NgForm;
  selectedCategory: Category = { id: null, name: null };
  books: Book[];
  error: { name: string};
  operation: string;

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
        this.selectedCategory = { id: null, name: null };
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

  onCategoryAdd() {
    this.operation = 'Add';
    this.saveCategoryForm.reset();
    this.error = null;
  }

  onCategoryEdit(category: Category) {
    this.operation = 'Edit';
    this.selectedCategory = JSON.parse(JSON.stringify(category));
    this.error = null;
  }

  onCategorySaveSubmit(form: NgForm, closeButton: HTMLButtonElement) {
    this.categoryService.saveCategory({
      id: this.operation === 'Add' ? null : this.selectedCategory.id,
      name: form.value.name })
      .subscribe(
        () => {
          this.categories$ = this.categoryService.getCategories();
          closeButton.click();
        },
        (httpErrorResponse: HttpErrorResponse) => {
          this.error = { name: null };
          httpErrorResponse.error.exceptions.forEach(element => {
            this.errorHandler(element);
          });
          // console.error(error);
        }
      );
  }

  errorHandler(error) {
    switch (error.field) {
      case 'name':
        this.error.name = this.capitalize(error.message);
        break;
    }
  }

  capitalize(text) {
    return text[0].toUpperCase() + text.slice(1) + '!';
  }
}

