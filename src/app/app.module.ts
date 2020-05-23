
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';  
import { ReactiveFormsModule } from "@angular/forms";  
  
import { AppComponent } from './app.component';  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';  
import { EmployeeService } from './service/employee.service';
import { LoginEmpComponent } from './login-emp/login-emp.component';

import { FormsModule } from "@angular/forms";
@NgModule({  
  declarations: [  
    AppComponent,  
    ListEmpComponent,  
    AddEmpComponent, LoginEmpComponent  
  ],  
  imports: [  
    BrowserModule,  
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule,
    FormsModule  
  ],  
  providers: [EmployeeService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  
  
  
export class Employee {  
    id: number;  
    username: string;
    password:string;
    employee_name: string;  
    employee_salary: number;  
    employee_leave: number;  
}  
