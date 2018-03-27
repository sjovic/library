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
  @ViewChild('f') addCategoryForm: NgForm;
  selectedCategory: Category;
  error: { name: string};

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

  onCategoryAdd() {
    this.addCategoryForm.reset();
    this.error = null;
  }

  onCategorySaveSubmit(form: NgForm, closeButton: HTMLButtonElement) {
    this.categoryService.saveCategory({ id: null, name: form.value.name })
      .subscribe(
        () => {
          this.categoryService.getCategories();
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

