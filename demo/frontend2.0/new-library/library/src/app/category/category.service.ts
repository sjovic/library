import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Category } from './category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { map } from 'rxjs/operators';

const API = "http://localhost:8080/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  authService: AuthService;

  categoryChangedSubject = new Subject<number>();

  constructor(private httpClient: HttpClient, private auth: AuthService) {
    this.authService = auth;
  }

  getCategories() {
    return this.httpClient.get<any>(API)
      .pipe(map(
        (response) => { return response}
      ));
  }

  saveCategory(category: Category): Observable<any> {
    if (category.id) {
        return this.httpClient.put(API, category);
    }
    return this.httpClient.post(API, category);
  }

  deleteCategory(categoryId: number) {
      return this.httpClient.delete(API + '/' + (categoryId));
  }

}
