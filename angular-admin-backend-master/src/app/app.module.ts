import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {AllProductsComponent} from './components/all-products/all-products.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import {DashboardModule} from './components/main-content/main-component.module';
import { EditComponent } from './components/edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './components/add/add.component';


@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent,
    AllProductsComponent,
    UsersComponent,
    EditComponent,
    AddComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        DashboardModule,
        ReactiveFormsModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
