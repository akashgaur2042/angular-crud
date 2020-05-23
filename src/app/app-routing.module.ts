
import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';  
import {  LoginEmpComponent } from './login-emp/login-emp.component';



export const routes: Routes = [  
  { path: '', component: LoginEmpComponent, pathMatch: 'full' },  
  { path: 'list-emp', component: ListEmpComponent },  
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'login-emp', component: LoginEmpComponent }  
];  

@NgModule({  
  imports: [  
    CommonModule,  
    RouterModule.forRoot(routes)  
  ],  
  exports: [RouterModule],  
  declarations: []  
})  
export class AppRoutingModule { }
