import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModulesModule } from '../shared-data/shared-modules.module';

const routes: Routes = [
  {
    path: '',
   component: DashboardComponent
  }

];


export class AppRoutingModule { }
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModulesModule
  ]
})
export class DashboardModule { }
