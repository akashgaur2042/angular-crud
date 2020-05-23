import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  //baseURL is local host on which API is running
  baseUrl: string = 'http://localhost:3000/';

  //get employee details using routing via local host 
  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + 'employee/employees');
  }

  //deletes Employee using routing via local host 
  deleteEmployees(id: string) {
    return this.http.delete<Employee[]>(this.baseUrl + 'employee/delete/' + id);
  }

  //creates new employee details  
  createUser(employee: Employee) {
    return this.http.post(this.baseUrl + 'employee/create', employee);
  }

  //gets employee details using employee id
  getEmployeeById(id: string) {
    return this.http.get<Employee>(this.baseUrl + 'employee/' + id);
  }

  //creates new employee details
  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl + 'employee/login', { username: username, password: password });
  }

   //updates existing employee detail
  updateEmployee(employee: Employee) {
    return this.http.put(this.baseUrl + 'employee/update/' + employee.id, employee);
  }

  //isLogin() method will check authenication on every page whereever we call islogin
  isLogin() {
    var existingEntries = JSON.parse(localStorage.getItem("currentUser"));
    if (existingEntries != null) {
      return true
    }
    else {
      return false
    }
  }


}