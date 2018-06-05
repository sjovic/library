import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../categories/category.service';
import { BookService } from './../books/book.service';

@Component({
  selector: 'library-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedCategoryId: number;

  constructor(private bookService: BookService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.bookService.getBooks();
    this.categoryService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}
