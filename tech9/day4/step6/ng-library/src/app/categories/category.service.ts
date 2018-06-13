import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './category.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {
  API = 'http://localhost:8080/categories';
  categoryFilterChanged = new Subject<number>();

  constructor(private httpClient: HttpClient) { }

  // Return Observable that wraps array of Categories
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API);
  }

  // Update category if book already has an ID, save it otherwise and return Observable
  saveCategory(category: Category): Observable<any> {
    if (category.id) {
        return this.httpClient.put(this.API, category);
    }
    return this.httpClient.post(this.API, category);
  }

  // Delete category by ID and return Observable
  deleteCategory(categoryId: number) {
      return this.httpClient.delete(this.API + '/' + (categoryId));
  }
}
