import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'books', component: BooksComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], // , { useHash: true }
    exports: [RouterModule]
})

export class AppRoutingModule {

}
