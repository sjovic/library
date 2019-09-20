import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], data: {expectedRole: 'user'}},
  { path: 'categories', component: CategoryComponent, canActivate: [AuthGuardService], data: {expectedRole: 'admin'}},
  { path: 'books', component: BookComponent, canActivate: [AuthGuardService], data: {expectedRole: 'admin'}},
  { path: 'contacts', component: ContactComponent, canActivate: [AuthGuardService], data: {expectedRole: 'user'}},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
