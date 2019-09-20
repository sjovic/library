import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/category/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: []
})
export class CategoryListComponent implements OnInit {

  categories$: Category[];
  selectedCategoryId: number = 0;
  cat: Subscription;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
     this.categoryService.getCategories()
        .subscribe(
          (data) => {
            this.categories$ = data;
          }
        );
  }

  onCategorySelected(id: number) {
    this.selectedCategoryId = id;
    this.categoryService.categoryChangedSubject.next(id);
  }

}
