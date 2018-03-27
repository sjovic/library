import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CategoryService } from './../../categories/category.service';

@Component({
  selector: 'library-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<number>();
  selectedCategoryId: number = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  onCategorySelect(categoryId: number) {
    this.selectedCategoryId = categoryId;
    if (!categoryId) {
      this.categorySelected.emit(null);
    }
    this.categorySelected.emit(categoryId);
  }
}
