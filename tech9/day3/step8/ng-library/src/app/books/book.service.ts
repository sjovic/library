import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.model';

@Injectable()
export class BookService {
  API = 'http://localhost:8080/books';

  constructor(private httpClient: HttpClient) { }

  // Return Observable that wraps array of Books
  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API);
  }

  // Update book if book already has an ID, save it otherwise and return Observable
  saveBook(book: Book): Observable<any> {
    if (book.id) {
        return this.httpClient.put(this.API, book);
    }
    return this.httpClient.post(this.API, book);
  }

  // Delete book by ID and return Observable
  deleteBook(bookId: number) {
    return this.httpClient.delete(this.API + '/' + (bookId));
  }
}
