import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoListComponent } from './memo-list/memo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemoDetailComponent } from './memo-detail/memo-detail.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'memos',
    component: MemoListComponent
  }, {
    path: 'detail/:id',
    component: MemoDetailComponent
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
