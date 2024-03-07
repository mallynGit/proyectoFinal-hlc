import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent  implements OnInit {


  public async createUser(email:string, password:string) {
    let r = await this.authService.createUser(email,password)
    return r
  }

  public async formRegister(event:SubmitEvent){
    event.preventDefault()
    let r = await this.createUser(this.userModel.email, this.userModel.password)
    if(r == 200){
      this.rout.navigateByUrl('nivel')
    }else{
      console.log(r);
      
    }
  }

  public log(evento:any){
    console.log(evento)
    console.log(this.userModel)
  }

  public userModel = {
    email: '',
    password: ''
  }

  constructor(private rout:Router, private authService:AuthService) { }

  ngOnInit() {
    console.log()
  }

}
