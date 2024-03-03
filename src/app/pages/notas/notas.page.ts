import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  public uid: string;
  public notas: any[] = [];

  constructor(private fs: FirestoreService, private auth: AuthService, private router:Router) {}

  createNote(){
    console.log(this.notas);
    return this.router.navigateByUrl('/nota-view');
  }

  ngOnInit() {
    this.uid = <string>this.auth.getUserId();
    console.log(this.uid,'uidnotas')

    this.fs.getNotes(this.uid).pipe(
      switchMap(notes => {
        return this.orderNotesByDate(notes);
      })
    ).subscribe(sortedNotes => {
      this.notas = sortedNotes;
    });
  }

  private orderNotesByDate(notes: any[]): Observable<any[]> {
    // ordenar por la fecha en orden descendente
    return of(notes.sort((a, b) => b.date - a.date));
  }
}
