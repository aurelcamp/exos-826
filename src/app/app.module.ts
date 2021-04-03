import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Correction1Component } from './pages/correction1/correction1.component';
import { Correction2Component } from './pages/correction2/correction2.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    NavbarComponent,
    Correction1Component,
    Correction2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
