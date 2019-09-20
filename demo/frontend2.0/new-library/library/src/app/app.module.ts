import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './home/book-list/book-list.component';
import { CategoryListComponent } from './home/category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterBooksByCategoryPipe } from './filter-books-by-category';
import { XhrInterceptor } from './interceptor/XhrInterceptor';
import { AuthGuardService } from './auth-guard.service';
import { JwtInterceptor } from './interceptor/JwtInterceptor';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    CategoryComponent,
    HomeComponent,
    BookListComponent,
    CategoryListComponent,
    LoginComponent,
    FilterBooksByCategoryPipe,
    ContactComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
