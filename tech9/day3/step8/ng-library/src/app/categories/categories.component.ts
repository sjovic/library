import { Component, OnInit } from '@angular/core';

import { CategoryService } from './category.service';

@Component({
  selector: 'library-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories();
  }

}
