import { RomanticismoDetailComponent } from './romanticismo-detail/romanticismo-detail.component';
import { RomanticismoComponent } from './romanticismo/romanticismo.component';
import { RenacentismoDetailComponent } from './renacentismo-detail/renacentismo-detail.component';
import { RenacentismoComponent } from './renacentismo/renacentismo.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',pathMatch: "full", component: HomeComponent },
  {path: 'renacentismo', component: RenacentismoComponent},
  {path:'renacentismo/:renacentismoID', component: RenacentismoDetailComponent},
  {path: 'romanticismo', component: RomanticismoComponent},
  {path:'romanticismo/:romanticismoID', component: RomanticismoDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
