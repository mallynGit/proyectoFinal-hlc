// auth.service.ts

import { Injectable } from '@angular/core';
import { Auth, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {




  public auth: Auth

  async createUser(email: string, password: string){
    try {
      let e = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log(e);
      return 200
    }
    catch (err) {
      console.log(err);
      return 400
    }
  }

  async loginWithEmail(user: string, password: string) {
    try {
      let e = await signInWithEmailAndPassword(this.auth, user, password);
      console.log(e);

      return 200
    }
    catch (err) {
      console.log(err);
      return 400
    }
  }

  async logout(){
    console.log(this.auth.currentUser);
    await this.auth.signOut();
    console.log(this.auth.currentUser);
    return 'ok'
  }

  returnUserState(){
    return this.auth.currentUser;
  }

  constructor() {
    this.auth = getAuth();
    
  }

  // isAdmin(): boolean {
  //   // Lógica para verificar si el usuario autenticado es un administrador
  //   // Puedes almacenar el rol en la base de datos o en el token de Firebase.
  //   // Devuelve true si el usuario es un administrador, de lo contrario, false.
  // }
}
