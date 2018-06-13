import { Pipe, PipeTransform } from '@angular/core';

import { Book } from './books/book.model';

@Pipe({
  name: 'filterBooksByCategory'
})
export class FilterBooksByCategoryPipe implements PipeTransform {

  transform(books: Book[], categoryId: number): Book[] {
    if (categoryId) {
      return books.filter((book) => book.category.id === categoryId);
    }
    return books;
  }
}
