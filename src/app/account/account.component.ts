import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LoginModel } from '../models/Login.model';
import { RegisterModel } from '../models/Register.model';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {


  loginRequest : LoginModel = {
    Email: '',
    Password: ''
  }

  registerRequest : RegisterModel = {
    Email: '',
    Password: '',
    ConfirmPassword: ''
  }

  @ViewChild('signup')
  signupRef!: ElementRef;
  @ViewChild('login')
  loginRef!: ElementRef;
  @ViewChild('slider')
  sliderRef!: ElementRef;
  @ViewChild('formSection')
  formSectionRef!: ElementRef;

  constructor(private renderer: Renderer2,private accountService : AccountService, private router : Router) {}

  Register() {
    this.accountService.register(this.registerRequest).subscribe({
      next: (res) => {
         alert("You are registered successfully! Login to continue .")
        //this.router.navigate(['Employee']);
      }
    });
    }


    Login() {
      this.accountService.login(this.loginRequest).subscribe({
        next: (res) => {

          console.log("abcd");
          this.router.navigate(['Employee']);
        }
      });
    }

  toggleSlider(event: Event) {
    const isSignup = (event.target as HTMLElement).classList.contains('signup');

    if (isSignup) {
      this.renderer.addClass(this.sliderRef.nativeElement, 'moveslider');
      this.renderer.addClass(this.formSectionRef.nativeElement, 'form-section-move');
    } else {
      this.renderer.removeClass(this.sliderRef.nativeElement, 'moveslider');
      this.renderer.removeClass(this.formSectionRef.nativeElement, 'form-section-move');
    }
  }

  //  signup = document.querySelector(".signup");
  //  login = document.querySelector(".login");
  //  slider = document.querySelector(".slider");
  //  formSection = document.querySelector(".form-section");
  
  // signup.addEventListener("click", () => {
  //     slider.classList.add("moveslider");
  //     formSection.classList.add("form-section-move");
  // });
  
  // login.addEventListener("click", () => {
  //     slider.classList.remove("moveslider");
  //     formSection.classList.remove("form-section-move");
  // });
  

}
