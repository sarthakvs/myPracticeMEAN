import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowReqComponent } from './show-req/show-req.component';
import { ReqFormComponent } from './req-form/req-form.component';

const routes: Routes = [
  {path:"",redirectTo:"showRequests",pathMatch:"full"},
  {path:"showRequests",component:ShowReqComponent},
  {path:"submitRequest",component:ReqFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
