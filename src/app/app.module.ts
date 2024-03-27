// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CvListComponent } from './cv-list.component';
import { CvDetailComponent } from './cv-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CvListComponent, CvDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
