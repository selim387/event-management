import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import {MainContentComponent} from './main-content.component';
import {SalesratioGraphComponent} from './components/salesratio-graph/salesratio-graph.component';
import {LatestSalesComponent} from './components/latest-sales/latest-sales.component';
import {ReferalEarningComponent} from './components/referal-earning/referal-earning.component';


import {RecentCommentsComponent} from './components/recent-comments/recent-comments.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs/utilisateurs.component';


// @ts-ignore



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard'
    },
    component: MainContentComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule],
  exports: [
    SalesratioGraphComponent,
    LatestSalesComponent,
    RecentCommentsComponent,

    ReferalEarningComponent,
    UtilisateursComponent
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [SalesratioGraphComponent, LatestSalesComponent , ReferalEarningComponent, UtilisateursComponent, RecentCommentsComponent, UtilisateursComponent]
})
export class DashboardModule {}
