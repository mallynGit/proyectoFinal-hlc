// auth.service.ts

import { Injectable } from '@angular/core';
import { Auth, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { FirestoreService } from './firestore.service';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {




  public auth: Auth

  async restorePassword(email: string){
    try {
      await sendPasswordResetEmail(this.auth, email)
      return 200
    }
    catch (err) {
      console.log(err);
      return 500
    }
  }

  async createUser(email: string, password: string) {
    try {
      let e = await createUserWithEmailAndPassword(this.auth, email, password);
      let user = e.user
      let userObj: User = {
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        password: password
      }

      this.fs.addUser(userObj)
      console.log(e);
      return 200
    }
    catch (err) {
      console.log(err);
      return 500
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

  async logout() {
    console.log(this.auth.currentUser);
    await this.auth.signOut();
    console.log(this.auth.currentUser);
    return 'ok'
  }

  returnUserState() {
    return this.auth.currentUser;
  }

  constructor(private fs: FirestoreService) {
    this.auth = getAuth();

  }

  getUserId(){
    return this.auth.currentUser?.uid
  }

  // isAdmin(): boolean {
  //   // Lógica para verificar si el usuario autenticado es un administrador
  //   // Puedes almacenar el rol en la base de datos o en el token de Firebase.
  //   // Devuelve true si el usuario es un administrador, de lo contrario, false.
  // }
}
