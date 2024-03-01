import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc } from 'firebase/firestore';
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

  public addNote(note: any, uid: string) {
    return this.db.collection(`notes/${uid}/uid`).add(note);
  }

  public getNotes(uid: string) {
    return this.db.collection(`notes/${uid}/uid`).valueChanges({ idField: 'id' });
  }

  public getNoteById(id: string, uid?: string) {
    return this.db.collection(`notes/${uid}/uid`).doc(id).valueChanges({ idField: 'id' });
  }

  public async saveNoteById(id: string, data: any, uid?: string) {
    console.log(id, 'exists id in service?')
    data['date'] = Date.now();
    let doc = this.db.collection(`notes/${uid}/uid`).doc(id)
    return await setDoc(doc.ref, data);
    //return await doc.set(data);
  }

  public deleteNoteById(id: string, uid?: string) {
    return this.db.collection(`notes/${uid}/uid`).doc(id).delete();
  }

  public addUser(user: any) {
    return this.db.collection('users').add(user);
  }

}
