import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movies/movies.component';
import { Categorirescomponent } from './categories/categorires.component';
import { DetailComponent } from './detail/detail.component';

import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MovieService } from './service/movies.services';
import { NotificationServices } from './service/notification.services';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieComponent,
    Categorirescomponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot({
    //   timeOut: 3000,
    //   positionClass: 'toast-top-right',
    //   preventDuplicates: true,
    // }),
    
   
  ],
  providers: [
    provideClientHydration(),
    MovieService,
    NotificationServices
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
