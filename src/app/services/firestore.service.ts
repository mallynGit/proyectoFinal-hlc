import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  public test: AngularFirestoreDocument<any>;
  public storage: any;


  public getUserById(uid: string) {
    const docRef = this.db.doc(`users/${uid}`).valueChanges();
    console.log(docRef,'docref');
    return docRef;
  }

  public async deleteImage(imageUrl: string) {

    let imgRef = ref(this.storage, imageUrl);

    await deleteObject(imgRef)

  }
  constructor(public db: AngularFirestore, public alert: AlertService) {
    this.storage = getStorage();
  }

  public addNote(note: any, uid: string) {
    return this.db.collection(`notes/${uid}/uid`).add(note);
  }

  public getNotes(uid: string) {
    return this.db
      .collection(`notes/${uid}/uid`)
      .valueChanges({ idField: 'id' });
  }

  public async createGroup(group: any, uid: any) {
    const addedGroup = await this.db.collection('groups').add(group);
    console.log('added group id', addedGroup.id);
    addedGroup.update({ gid: addedGroup.id });

    this.addGroupToUser(addedGroup.id, uid);
    return addedGroup;
  }

  public async addGroupToUser(gid: any, uid: any) {

    try{
    const groupRef = this.db.collection('groups').doc(gid);
    const grpDoc = await groupRef.ref.get();
    const grpData: any = grpDoc.data();
    let groupUsers: any = grpData.users;
    console.log(groupUsers, 'groupuserssss')
    if(groupUsers.includes(uid)){
      
    }else{
      groupUsers.push(uid);
    }

    this.db.collection('groups').doc(gid).update({ users: groupUsers });
    }catch(err){
      this.alert.presentAlert("Error al añadir grupo");
    }
    //add group to user

    const userRef = this.db.collection('users').doc(uid);
    const userDoc = await userRef.ref.get();
    const userData: any = userDoc.data();
    let userGroups: any = userData.groups;
    if(userGroups.includes(gid)){

    }else{
      userGroups.push(gid);
    }

    console.log(userGroups, 'curernt grupos"');
    this.db.collection('users').doc(uid).update({ groups: userGroups });
  }

  public async deleteGroup(gid: any) {
    const firestore = this.db.firestore;

    try {
      // Step 1: Delete the group document
      await firestore.collection('groups').doc(gid).delete();

      // Step 2: Query for users who belong to that group
      const usersQuerySnapshot = await firestore
        .collection('users')
        .where('groups', 'array-contains', gid)
        .get();

      // Step 3: Update each user document to remove the group ID
      await this.db.firestore.runTransaction(async (transaction) => {
        const batch = this.db.firestore.batch();

        usersQuerySnapshot.forEach((userDoc) => {
          const userRef = firestore.collection('users').doc(userDoc.id);
          const userData = userDoc.data();
          const updatedGroups = userData['groups'].filter((group: string) => group !== gid);

          batch.update(userRef, { groups: updatedGroups });
        });

        await batch.commit();
      });
    } catch (error) {
      console.error('Error deleting group:', error);
      this.alert.presentAlert("Error al eliminar el grupo");
    }
  }

  public getNoteById(id: string, uid?: string) {
    return this.db
      .collection(`notes/${uid}/uid`)
      .doc(id)
      .valueChanges({ idField: 'id' });
  }

  public async saveNoteById(id: string, data: any, uid?: string) {
    console.log(id, 'exists id in service?');
    data['date'] = Date.now();
    let doc = this.db.collection(`notes/${uid}/uid`).doc(id);
    return await setDoc(doc.ref, data);
    //return await doc.set(data);
  }

  public deleteNoteById(id: string, uid?: string) {
    return this.db.collection(`notes/${uid}/uid`).doc(id).delete();
  }

  public addUser(user: any) {
    return this.db.collection('users').doc(user.uid).set(user);
  }
}
