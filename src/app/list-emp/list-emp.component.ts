import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  currentEmployee: Employee;
  employees: Employee[];


  constructor(public empService: EmployeeService, private router: Router) {

    //this will condition will check whether user is logged-in or not, if not this will route to log-in page
    if (this.empService.isLogin() == true) { }
    else {
      this.router.navigate(['/login-emp']);
    }

  }

  // logout method is called in logout page and redirect to login page
  logout() {
    // remove user from local storage to log user out    
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login-emp']);
  }

  ngOnInit() {
    this.empService.getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
  }

  //this method is used for delete employee details by employee id
  deleteEmp(employee: Employee): void {
    this.empService.deleteEmployees(employee.id)
      .subscribe(data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  }

  //this method is used for edit employee details by employee id
  editEmp(employee: Employee): void {
    localStorage.setItem("empId", employee.id);
    localStorage.setItem("empName", employee.employee_name);
    localStorage.setItem("empSalary", JSON.stringify(employee.employee_salary));
    localStorage.setItem("empLeave", JSON.stringify(employee.employee_leave));

    this.router.navigate(['add-emp']);

  }
} 
