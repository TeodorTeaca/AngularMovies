import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { ListMoviesComponent } from './list.movies/list-movies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service'
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { MyListComponent } from './my-list/my-list.component';

const appRoutes: Routes = [
  { path: '', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'my-list', component: MyListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    LoginComponent,
    ListMoviesComponent,
    MyListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
