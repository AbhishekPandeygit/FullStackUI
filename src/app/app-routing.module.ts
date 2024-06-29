import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/Employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'' , component : EmployeeListComponent},
  {path:'Employee' , component : EmployeeListComponent},
  {path:'Employee/add' , component : AddEmployeeComponent},
  {path:'Employee/edit/:id' , component : EditEmployeeComponent},
  {path:'Product' , component : ProductComponent},
  {path:'product-list' , component : ProductListComponent},
  {path:'account' , component : AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
