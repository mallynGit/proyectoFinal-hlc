import { Component, OnInit } from '@angular/core';
import UserModel from './login.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private AuthServ = new AuthService();

  public go(event: SubmitEvent) {
    event.preventDefault();

    console.log(event.target)
    console.log(this.userModel)
    console.log((this.userModel.name, this.userModel.password));

  }

  public userModel: UserModel = {
    name: '',
    password: ''
  }

  constructor() {



  }

  ngOnInit() {
  }

}
