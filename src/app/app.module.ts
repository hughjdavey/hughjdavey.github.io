import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxStarsDemoComponent } from './ngx-stars/ngx-stars-demo.component';
import { NavComponent } from './nav/nav.component';
import { NgxStarsComponent } from 'ngx-stars';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NgxStarsComponent,
    NgxStarsDemoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
