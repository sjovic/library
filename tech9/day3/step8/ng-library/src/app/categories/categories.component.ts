import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from './category.service';
import { Category } from './category.model';

@Component({
  selector: 'library-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }

}
