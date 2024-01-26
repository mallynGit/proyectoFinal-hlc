import { Component, Optional } from '@angular/core';
import UserModel from 'src/app/login/login.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  public authService: AuthService

  public userModel: UserModel = {
    name: '',
    password: ''
  }

  public go(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.userModel)
    console.log(this.authService)
    console.log(this.authService.loginWithEmail(this.userModel.name, this.userModel.password));
  }

  constructor() { }



}
