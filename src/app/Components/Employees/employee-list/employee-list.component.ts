import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[] = [] ; 
// employees : Employee[] = [
//   {
//     id : 'id1',
//     name : 'string1',
//     email : 'string1@abc.com',
//     phone : 7878787,
//     salary : 989789798,
//     department : 'dep1'
//   },
//   {
//     id : 'id2',
//     name : 'string2',
//     email : 'string2@abc.com',
//     phone : 787878222,
//     salary : 9897983333,
//     department : 'dep2'
//   }
// ]

/**
 *
 */
constructor(private employeeService : EmployeesService) {}

  ngOnInit(): void {
       this.employeeService.getAllEmployees()
       .subscribe({
        next : (employees) => {
          this.employees = employees ;    
            },
        error :(response) => {
          console.log(response);

        }
       })
  }

}
