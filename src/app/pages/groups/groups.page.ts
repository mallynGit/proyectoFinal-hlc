/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import Group from 'src/app/interfaces/group.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  public groupName: string = '';
  public groups: any;
  private uid: string;

  ngOnInit() {
    this.uid = <string>this.authService.getUserId();
    this.getGroups();
  }
  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private firestore: FirestoreService
  ) {}

  public async createGroup() {
    const groupName = await this.alertService.presentNamePrompt(
      'Nombre del grupo'
    );
    if (!groupName) {
      return;
    }
    const uid = this.authService.getUserId();
    console.log('desde funcion bien :)', uid);
    let group = {
      name: groupName,
      users: [uid],
    };
    console.log(await this.firestore.createGroup(group, uid));
  }

  public async joinGroup() {
    const groupId = await this.alertService.presentNamePrompt('ID del grupo');
    if (!groupId) {
      return;
    }
    const uid = this.authService.getUserId();

    console.log(await this.firestore.addGroupToUser(groupId, uid));
  }

  public async getGroups() {
    console.log(this.uid);
    // this.authService.returnUserDoc(uid).subscribe((usr: any) => {
    //   console.log(usr,'usr')
    // });

    console.log(this.groups);
  }
}
