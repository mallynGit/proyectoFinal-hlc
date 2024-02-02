import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public test: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) { }

  public addNote(note: any) {
    return this.db.collection('notes').add(note);
  }

  public addUser(user: any) {
    return this.db.collection('users').add(user);
  }

}
