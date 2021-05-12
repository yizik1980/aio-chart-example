import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = [
  {path:'', redirectTo:'/main', pathMatch : 'full'},
  {path:'main',loadChildren:'./layout/layout.module#mainLayout'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
