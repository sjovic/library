import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'library-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedCategoryId: number;

  constructor() { }

  ngOnInit() {
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}
