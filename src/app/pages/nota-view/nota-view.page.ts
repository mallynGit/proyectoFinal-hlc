/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DatepipePipe } from 'src/app/pipes/datepipe.pipe';

@Component({
  selector: 'app-nota-view',
  templateUrl: './nota-view.page.html',
  styleUrls: ['./nota-view.page.scss'],
  providers: [DatepipePipe],
})
export class NotaViewPage {
  title: string = '';
  content: string = '';
  id: string;
  date: Date;

  constructor(
    private route: ActivatedRoute,
    private fs: FirestoreService,
    private auth: AuthService,
    private datePipe: DatepipePipe
  ) {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }

  public async saveNote() {
    let data = { title: this.title, content: this.content, date: Date.now() };

    console.log(
      await this.fs.saveNoteById(this.id, data, this.auth.getUserId()),
      'saved? maybe'
    );

    let backBtn = document.querySelector('#back') as HTMLButtonElement;
    backBtn.click();
  }

  public deleteNote() {
    this.fs.deleteNoteById(this.id, this.auth.getUserId()).then(() => {
      let backBtn = document.querySelector('#back') as HTMLButtonElement;
      backBtn.click();
    });
  }

  public inputUpdate(e: any) {
    console.log(e, 'from functoin');
    if (e.target.id == 'title') {
      this.title = e.target.value;
    } else if (e.target.id == 'content') {
      this.content = e.target.value;
    }
    console.log('updated? perhaps', this.title, this.content);
  }

  ngOnInit() {
    if (this.id != null && this.id != undefined) {
      this.fs
        .getNoteById(this.id, this.auth.getUserId())
        .subscribe((res: any) => {
          res = this.datePipe.transform(res);
          this.title = res.title;
          this.content = res.content;
          console.log(res, 'res possibly transofmred');
          this.date = res.date;
          console.log(this.date, 'date transform? maybe');
          let dateItem = document.querySelector('#date') as HTMLIonItemElement;
          dateItem.innerHTML = this.date.toISOString();
        });
    }
  }
}
