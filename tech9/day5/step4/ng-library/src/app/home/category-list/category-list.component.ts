import { Category } from './../../categories/category.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../categories/category.service';

@Component({
  selector: 'library-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;
  selectedCategoryId: number = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }

  onCategorySelect(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.categoryService.categoryFilterChanged.next(categoryId);
  }
}
