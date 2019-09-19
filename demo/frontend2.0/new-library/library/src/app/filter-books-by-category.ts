import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book/book.model';

@Pipe({
    name: 'filterBooksByCategory'
  })
  export class FilterBooksByCategoryPipe implements PipeTransform {
  
    //filter za prikaz knjiga po kategoriji
    transform(books: Book[], categoryId: number): Book[] {
      if (categoryId) {
        return books.filter((book) => book.category.id === categoryId);
      }
      return books;
    }
  
  }