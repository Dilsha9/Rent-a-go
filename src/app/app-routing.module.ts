import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [{path:'shopping',component:ShoppingComponent},
{path:'description',component:DescriptionComponent},{path:'cart',component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
