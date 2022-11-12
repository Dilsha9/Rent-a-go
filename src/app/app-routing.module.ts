import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [{path:'shopping',component:ShoppingComponent},
{path:'description',component:DescriptionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
