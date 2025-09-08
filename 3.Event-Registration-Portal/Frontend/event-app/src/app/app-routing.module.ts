import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventsComponent } from './show-events/show-events.component';
import { RegisterEventComponent } from './register-event/register-event.component';

const routes: Routes = [
  {path:"",redirectTo:'allEvents',pathMatch:"full"},
  {path:"allEvents",component:ShowEventsComponent},
  {path:"registerEvent",component:RegisterEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
