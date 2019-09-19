import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { BookService } from '../book/book.service';
import { Book } from '../book/book.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})
export class CategoryComponent implements OnInit {

  categories$: Category[];
  books: Book[] = null;
  selectedCategory: Category = {id: null, name: ""};
  error = false;
  operation: string;

  constructor(private categoryService: CategoryService, private bookService: BookService) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(
        data => { this.categories$ = data;}
      );
    this.bookService.getBooks()
    .subscribe(
      (b)=> {
        this.books = b;
      }
    );
  }

  onDeleteCategory(category: Category) {
    this.selectedCategory = category;
  }

  onCategoryDeleteSubmit() {
    this.categoryService.deleteCategory(this.selectedCategory.id)
    .subscribe(
      ()=> {
          this.categoryService.getCategories()
            .subscribe(
              data => { this.categories$ = data;}
            );
          this.selectedCategory = {id: null, name: ""};
      },
      (error) => {console.log(error);}
    );
  }

  ifCategoryExists(category: Category): boolean{
    if(this.books) {
      for(var book of this.books) {
        if(book.category.id === category.id)
          return true;
      }
    }

    return false;
  }

  onCategoryAdd(form: NgForm) {
    this.error = false;
    this.operation = "Add category";
    this.selectedCategory = {id: null, name: ""};
    
    form.resetForm();
  }

  onEditCategory(category: Category) {
    this.error = false;
    this.operation = "Edit operation"
    this.selectedCategory = Object.assign({}, category);
  }

  onCategorySaveSubmit(form: NgForm, closeButton: HTMLButtonElement) {
    
    if(form.value.name != null && form.value.name !=="") {// netreba jer ako nije validno nece raditi submit
      var id = null;
      if(form.value.id != null && form.value.id !=="") {
        id = form.value.id;
      }

      this.categoryService.saveCategory({ id: id, name: form.value.name })
      .subscribe(
        ()=> {
            this.categoryService.getCategories()
              .subscribe(
                data => { this.categories$ = data;}
              );
            closeButton.click();
        },
        (httpErrorResponse: HttpErrorResponse) => {
          this.error = true;
          console.log(httpErrorResponse);                   
        }
      );
    }
  }

}
