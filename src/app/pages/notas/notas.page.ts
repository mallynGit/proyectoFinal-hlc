import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  public uid: string;
  public notas: any[] = []

  constructor(private fs: FirestoreService, private auth: AuthService, private router:Router) {

  }

  createNote(){
    return this.router.navigateByUrl('/nota-view')
  }

  ngOnInit() {
    this.uid = <string>this.auth.getUserId()

    this.fs.getNotes(this.uid).subscribe((notes) => {
      this.notas = notes
    })
    // .subscribe((notes) => {
    //   console.log(notes);
    // })


    // this.fs.addNote({
    //   title: 'test',
    //   content: 'test'
    // })
  }

}
