import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductsComponent } from './show-products/show-products.component';
import { RegisterProductComponent } from './register-product/register-product.component';

const routes: Routes = [
  {path:"",redirectTo:"showProducts",pathMatch:'full'},
  {path:"showProducts",component:ShowProductsComponent},
  {path:"registerProduct",component:RegisterProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
