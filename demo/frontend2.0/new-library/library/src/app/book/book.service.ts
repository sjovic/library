import { Injectable } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Book } from './book.model';
import { map } from 'rxjs/operators';

const API = 'http://localhost:8080/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  authService: AuthService;

  constructor(private httpClient: HttpClient, private auth: AuthService) {
    this.authService = auth;
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API)
        .pipe(map(
          (response: any) => { return response}
        ));
  }

  saveBook(book: Book): Observable<any> {
    if(book.id) {
        return this.httpClient.put(API, book)
          .pipe(map(
            (response: any) => { return response}
          ));
    }

    return this.httpClient.post(API, book)
        .pipe(map(
          (response: any) => { return response}
        ));
  }

  deleteBook(bookId: number) {
    return this.httpClient.delete(API + '/' + bookId);
  }
}
