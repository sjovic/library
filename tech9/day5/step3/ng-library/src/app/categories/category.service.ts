import { Observable } from 'rxjs/Observable';
import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './category.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {
  API = 'http://localhost:8080/categories';
  categoryFilterChanged = new Subject<number>();

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // Return Observable that wraps array of Categories
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API, { headers: this.authService.getAuthHeaders() });
  }

  // Update category if book already has an ID, save it otherwise and return Observable
  saveCategory(category: Category): Observable<any> {
    if (category.id) {
        return this.httpClient.put(this.API, category, { headers: this.authService.getAuthHeaders() });
    }
    return this.httpClient.post(this.API, category, { headers: this.authService.getAuthHeaders() });
  }

  // Delete category by ID and return Observable
  deleteCategory(categoryId: number) {
      return this.httpClient.delete(this.API + '/' + (categoryId), { headers: this.authService.getAuthHeaders() });
  }
}
