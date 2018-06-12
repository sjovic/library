import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../categories/category.service';
import { Category } from '../../categories/category.model';

@Component({
  selector: 'library-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }

}
