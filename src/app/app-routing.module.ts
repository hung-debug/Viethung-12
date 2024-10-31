import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movies/movies.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'login',component: LoginComponent
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'movies', component: MovieComponent },
  { path: 'movies/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
