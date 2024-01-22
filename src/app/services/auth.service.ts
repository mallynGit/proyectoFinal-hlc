import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private auth: Auth) {

    function loginWithEmail(user: string, password: string) {
      signInWithEmailAndPassword(auth, user, password)
      return 'test'
    }


  }
}
