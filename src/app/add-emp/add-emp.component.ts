import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  empformlabel: string = 'Add Employee';
  empformbtn: string = 'Save';

  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) {

    if (this.empService.isLogin() == true) { }
    else {
      this.router.navigate(['/login-emp']);
    }
  }

  addForm: FormGroup;
  btnvisibility: boolean = true;
  ngOnInit() {

    this.addForm = this.formBuilder.group({

      id: ['', Validators.required],
      employee_name: ['', Validators.required],
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],
      employee_leave: ['', [Validators.required, Validators.maxLength(3)]]
    });

    // get values from local storage for patch values for updation of form values
    let empid = localStorage.getItem('empId');
    let empname = localStorage.getItem('empName');
    let empsalary = localStorage.getItem('empSalary');
    let empleave = localStorage.getItem('empLeave');
    if (empid) {
      this.empService.getEmployeeById(empid).subscribe(data => {
        this.addForm.patchValue({ id: empid, employee_name: empname, employee_salary: empsalary, employee_leave: empleave });

      })
      this.btnvisibility = false;
      this.empformlabel = 'Edit Employee';
      this.empformbtn = 'Update';
    }

    localStorage.removeItem('empId');
    localStorage.removeItem('empName');
    localStorage.removeItem('empSalary');
    localStorage.removeItem('empLeave');

  }

// this method is for submitting form values and this method will navigate to list-emp component
  onSubmit() {

    this.empService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-emp']);
      });
  }

//this method is for updating form values 
  onUpdate() {
    this.empService.updateEmployee(this.addForm.value).subscribe(data => {
      this.router.navigate(['list-emp']);
    });
  }

//ngOnDestroy is used for cleanup localStrorage having key- editEmpId
  ngOnDestroy() {
    localStorage.removeItem('editEmpId');
  }

}

