import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../categories/category.service';

@Component({
  selector: 'library-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

}
