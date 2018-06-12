import { Category } from './../../categories/category.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CategoryService } from './../../categories/category.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'library-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;
  @Output() categorySelected = new EventEmitter<number>();
  selectedCategoryId: number = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }

  onCategorySelect(categoryId: number) {
    this.selectedCategoryId = categoryId;
    if (!categoryId) {
      this.categorySelected.emit(null);
    }
    this.categorySelected.emit(categoryId);
  }
}
