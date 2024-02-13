import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import {getStorage} from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public test: AngularFirestoreDocument<any>;
  public storage:any;

  constructor(private db: AngularFirestore) {
    this.storage = getStorage();
   }

  public addNote(note: any) {
    return this.db.collection('notes').add(note);
  }

  public addUser(user: any) {
    return this.db.collection('users').add(user);
  }

}
