import { Component } from '@angular/core';
import { AccountService } from './Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FullStack.UI';

  constructor(public accountService : AccountService) {}


  Logout() {
    this.accountService.logout();
  }

}
