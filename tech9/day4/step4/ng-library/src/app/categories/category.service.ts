import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './category.model';

@Injectable()
export class CategoryService {
  API = 'http://localhost:8080/categories';
  categories: Category[];
  HEADERS = { headers: this.authService.getAuthHeaders() };

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // Subscribe to Observable and assign response data to categories array property
  getCategories() {
    return this.httpClient.get<Category[]>(this.API, this.HEADERS)
      .subscribe(
          (categories) => this.categories = categories,
          (error) => console.error('Failed to get categories!')
      );
  }

  // Update category if book already has an ID, save it otherwise and return Observable
  saveCategory(category: Category) {
    if (category.id) {
        return this.httpClient.put(this.API, category, this.HEADERS);
    }
    return this.httpClient.post(this.API, category, this.HEADERS);
  }

  // Delete category by ID and return Observable
  deleteCategory(categoryId: number) {
      return this.httpClient.delete(this.API + '/' + (categoryId), this.HEADERS);
  }
}
