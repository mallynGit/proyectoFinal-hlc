// auth.service.ts

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from './firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {



  public auth: any = firebase.auth()



  public loginWithEmail = (user: string, password: string) => {
    console.log(this.auth)
    this.auth.signInWithEmailAndPassword(user, password)
    return 'test'
  }

  constructor() {





  }

  // isAdmin(): boolean {
  //   // Lógica para verificar si el usuario autenticado es un administrador
  //   // Puedes almacenar el rol en la base de datos o en el token de Firebase.
  //   // Devuelve true si el usuario es un administrador, de lo contrario, false.
  // }
}
