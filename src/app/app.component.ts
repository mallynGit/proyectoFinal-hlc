import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'

import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {AuthService} from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages:any;
  public userStatus:any;
  

  // private auth = new AuthService();

  public async logout(){
    let e = await this.auth.logout()
    this.router.navigateByUrl('login')
    console.log(e);
    return e    
  }

  constructor(private store: Firestore, private authFS: Auth, private router:Router, private auth:AuthService) {

    // console.log(signInWithEmailAndPassword(this.authFS, 'test@test.com', 'Test123!'));

  }

  ngOnInit(): void {
    this.auth.auth.onAuthStateChanged((user) => {
      this.userStatus = user
      // console.log('USER STATE BUENO', this.userStatus);
      if(user==null){
        this.appPages = [
          {title: 'Login', url: '/login',  icon: 'person'},
          {title: 'Register', url:'/register', icon:'person-add'},
        ]
      }else{
        this.router.navigateByUrl('nivel')
        this.appPages = [
          {title: 'Nivel', url: '/nivel', icon: 'book'},
          {title: 'Home', url:'/home', icon: 'home'},
          {title: 'Calculadora', url:'/calculadora', icon: 'calculator'},
          {title: 'Galeria', url:'/galeria', icon: 'images'},
          {title: 'Notas', url:'/notas', icon: 'book'},
        ]
      }
    })
  }


}
