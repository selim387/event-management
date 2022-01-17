import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainContentComponent} from './components/main-content/main-content.component';
import {AllProductsComponent} from './components/all-products/all-products.component';
import {UsersComponent} from './components/users/users.component';
import {EditComponent} from './components/edit/edit.component';
import {AddComponent} from './components/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent
  },
  {
    path: 'products/all-products',
    component: AllProductsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {path: 'edit/:id',
  component: EditComponent},
  {path: 'add',
  component: AddComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
