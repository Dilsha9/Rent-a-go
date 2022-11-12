import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NavbarRenteeComponent } from './navbar-rentee/navbar-rentee.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path:"rentee", component:HomeProductComponent},
  {path:"addProduct", component:AddProductComponent},
  {path:"",component:ShoppingComponent}
]
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ShoppingComponent,
    NavbarRenteeComponent,
    HomeProductComponent,
    AddProductComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
