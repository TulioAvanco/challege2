import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./app/component/views/home/home.component";
import {RepositoriesComponent} from "./app/component/views/repositories/repositories.component";

const routes: Routes = [{
  path:'',
  component: HomeComponent},
  {
    path:'repositories',
    component: RepositoriesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
