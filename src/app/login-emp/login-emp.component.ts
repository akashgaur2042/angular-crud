import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../service/employee.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-login-emp',
  templateUrl: './login-emp.component.html',
  styleUrls: ['./login-emp.component.css']
})
export class LoginEmpComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor(public employeeservice: EmployeeService,
    private fb: FormBuilder, private router: Router, private http: HttpClient) {

    if (this.employeeservice.isLogin() == true) { }
    else {
      this.router.navigate(['/login-emp']);
    }

    this.createForm();
  }

  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void { }

  //login() method is for admin log-in , isCorrect flag is coming from API if username & password are matched then only login  
  login() {

    this.employeeservice.login(this.angForm.controls.username.value, this.angForm.controls.password.value).subscribe(
      user => {
        if (user.isCorrect) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.router.navigate(['/list-emp']);
        }
        else {
          window.alert("Incorrect Username or Password");
        }

      }
    );
  }
}