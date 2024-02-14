import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public test: AngularFirestoreDocument<any>;
  public storage: any;

  constructor(public db: AngularFirestore
  ) {
    this.storage = getStorage();
  }

  public addNote(note: any, uid:string) {
    return this.db.collection(`notes/${uid}/uid`).add(note);
  }

  public getNotes(uid: string) {
    return this.db.collection(`notes/${uid}/uid`).valueChanges();
  }

  public addUser(user: any) {
    return this.db.collection('users').add(user);
  }

}
