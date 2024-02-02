import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {


  constructor(private fs: FirestoreService) { }

  ngOnInit() {
    console.log(this.fs.test)

    this.fs.addNote({
      title: 'test',
      content: 'test'
    })
  }

}
