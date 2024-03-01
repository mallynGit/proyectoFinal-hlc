import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas-nota',
  templateUrl: './notas-nota.component.html',
  styleUrls: ['./notas-nota.component.scss'],
})
export class NotasNotaComponent  {
  constructor(private router: Router) { }

  @Input() datos: any;

  isExpanded: boolean = false;

  toggleExpanded(event: Event) {
    // let target = event.currentTarget as HTMLElement
    // console.log(getComputedStyle(target).height)
    this.isExpanded = !this.isExpanded;
    
  }

  goEditNote(){
    this.isExpanded = true;
    console.log(this.datos, 'datos de nota')
    this.router.navigate(['/nota-view'], {queryParams: {id: this.datos.id}});
  }

  

}
