import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginModel } from '../models/Login.model';
import { RegisterModel } from '../models/Register.model';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private loginUrl = environment.baseApiUrl + '/api/Account/Login';
  private registerUrl =  environment.baseApiUrl + '/api/Account/Register';

     private _isLoggedIn = false;
//   private _authToken: string | null = null;


  constructor(private http: HttpClient , private router : Router) {}

  login(loginModel: LoginModel): Observable<any> {
    this._isLoggedIn = true;
    return this.http.post(this.loginUrl, loginModel);
  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.http.post(this.registerUrl, registerModel);
  }

  logout(): void {
    this._isLoggedIn = false;
    this.router.navigate(["account"]);

  }


    // Getter to check if the user is logged in
  get isLoggedIn(): boolean {
    // Check if the token exists and is valid (you might need to verify the token)
    //return this._isLoggedIn && this._authToken !== null;
    return this._isLoggedIn
  }
}



// export class AuthService {
//   // Private properties to manage authentication state and token
//   private _isLoggedIn = false;
//   private _authToken: string | null = null;

//   constructor(private http: HttpClient) {}

//   // Method to attempt a user login
//   login(credentials: { username: string; password: string }) {
//     // Send a POST request to your authentication API endpoint
//     return this.http
//       .post<{ token: string }>('https://your-api.com/login', credentials)
//       .pipe(
//         tap((response) => {
//           this._isLoggedIn = true; // Set the logged in state to true
//           this._authToken = response.token; // Store the token received from the API
//           // Store the token in local storage or securely manage it
//           localStorage.setItem('authToken', this._authToken);
//         })
//       );
//   }

//   // Method to log out the user
//   logout() {
//     this._isLoggedIn = false; // Set the logged in state to false
//     this._authToken = null; // Clear the token
//     localStorage.removeItem('authToken'); // Remove the token from local storage
//   }

//   // Getter to check if the user is logged in
//   get isLoggedIn(): boolean {
//     // Check if the token exists and is valid (you might need to verify the token)
//     return this._isLoggedIn && this._authToken !== null;
//   }

//   // Method to get the authentication token
//   getAuthToken(): string | null {
//     return this._authToken;
//   }
// }