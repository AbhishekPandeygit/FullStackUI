import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { EmployeesService } from '../Services/employees.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService ,private router :Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            },
          });
        }
      },
    });
  }

  updateEmployee(){
    this.employeeService.UpdateEmployee(this.employeeDetails.id,this.employeeDetails).subscribe({
      next : (response) => {
        this.router.navigate(['Employee']);

      }
    });
  }

  deleteEmployee(id : string){
    this.employeeService.deleteEmployee(id).subscribe({
      next : (response) => {
        this.router.navigate(['Employee']);
      }
    })
  }

}
