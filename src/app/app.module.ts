import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MemoService } from './services/memo.service';

import { MemoListComponent } from './memo-list/memo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemoDetailComponent } from './memo-detail/memo-detail.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MemoListComponent,
    DashboardComponent,
    MemoDetailComponent
  ],
  providers: [MemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
