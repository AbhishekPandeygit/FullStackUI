import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  addProductRequest: Product = {
    id: '',
    name: '',
    quantity : '' 
  };

  constructor(private router :Router) {}

  ngOnInit(): void {}

  addProduct() {
  
    };

  // addProduct() {
  //   this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
  //     next: (employee) => {
  //       // console.log(employee);
  //       this.router.navigate(['Employee']);
  //     }
  //   });
  }


