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
  public appPages = [
    {title: 'Nivel', url: '/nivel', icon: 'arrowup'},
    {title: 'Login', url: '/login',  icon: 'login'},
    {title: 'home', url:'/home', icon: 'home'}
  ];

  

  private auth = new AuthService();

  public async logout(){
    let e = await this.auth.logout()
    this.router.navigateByUrl('login')
    console.log(e);
    return e    
  }

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private store: Firestore, private authFS: Auth, private router:Router) {

    // console.log(signInWithEmailAndPassword(this.authFS, 'test@test.com', 'Test123!'));

  }

  ngOnInit(): void {
    console.log('USER STATE', this.auth.returnUserState());
  }


}
