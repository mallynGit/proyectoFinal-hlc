import { Component, Optional } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  public authService = new AuthService();

  public validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/



  public userModel = {
    email: 'test@test.com',
    password: ''
  }

  public async go(event: SubmitEvent) {
    event.preventDefault();
    let r = await this.authService.createUser('hola@hola.com', 'Test123!')
    let e = await this.authService.loginWithEmail(this.userModel.email, this.userModel.password)
    console.log(this.userModel)
    if (this.userModel.email.match(this.validRegex)) {
      console.log('ES EMAIL');
    } else {
      console.log(';no email XD');
      this.userModel.email = '';
      this.userModel.password = '';
      return alert('Introduzca email valido')
    }
    if(e==200){
      console.log('logeaudo');
      this.rout.navigateByUrl('home')
    }else if(e==400){
      console.log('error')
      this.userModel.email = '';
      this.userModel.password = '';
      return alert('Email o contrasenya incorrecta')
    }
  }

  constructor(private rout:Router) { }



}
