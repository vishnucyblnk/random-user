import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainsectionComponent } from './mainsection/mainsection.component';

const routes: Routes = [
  {path : '', component : MainsectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
