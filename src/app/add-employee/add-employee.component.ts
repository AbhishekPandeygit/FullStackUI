import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../Services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private employeeService: EmployeesService,private router :Router) {}

  ngOnInit(): void {}

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        // console.log(employee);
        this.router.navigate(['Employee']);
      }
    });
  }
}
