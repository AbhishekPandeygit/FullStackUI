import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrll : string = environment.baseApiUrl ; 

  constructor(private http : HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('https://localhost:7049/api/Employee');
  }

  addEmployee(addEmployeeRequest : Employee): Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000' ;
    // return this.http.post<Employee>(this.baseApiUrll = '/api/Employee' ,
    return this.http.post<Employee>('https://localhost:7049/api/Employee' ,

    addEmployeeRequest)
  }

  getEmployee(id:string) : Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrll + '/api/Employee/' + id);
  }

  UpdateEmployee(id:string ,UpdateEmployeeRequest : Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrll + '/api/Employee/' + id ,UpdateEmployeeRequest);
  }

  deleteEmployee(id:string ) : Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrll + '/api/Employee/' + id);
  }

}
