import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.model';

@Injectable()
export class BookService {
  API = 'http://localhost:8080/books';
  books: Book[];
  HEADERS = { headers: this.authService.getAuthHeaders() };

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  // Subscribe to Observable and assign response data to books array property
  getBooks() {
    return this.httpClient.get<Book[]>(this.API, this.HEADERS)
      .subscribe(
          (books) => this.books = books,
          (error) => console.error('Failed to get books!')
      );
  }

  // Update book if book already has an ID, save it otherwise and return Observable
  saveBook(book: Book) {
    if (book.id) {
        return this.httpClient.put(this.API, book, this.HEADERS);
    }
    return this.httpClient.post(this.API, book, this.HEADERS);
  }

  // Delete book by ID and return Observable
  deleteBook(bookId: number) {
    return this.httpClient.delete(this.API + '/' + (bookId), this.HEADERS);
  }
}
