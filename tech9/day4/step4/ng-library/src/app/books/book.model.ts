import { Category } from './../categories/category.model';

export class Book {
    public id: number;
    public isbn: string;
    public category: Category;
    public title: string;
    public author: string;
    public publishDate: Date;

    constructor(id: number, isbn: string, category: Category, title: string, author: string, publishDate: Date) {
        this.id = id;
        this.isbn = isbn;
        this.category = category;
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
    }
}
