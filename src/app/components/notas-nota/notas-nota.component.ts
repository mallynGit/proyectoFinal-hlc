import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-nota',
  templateUrl: './notas-nota.component.html',
  styleUrls: ['./notas-nota.component.scss'],
})
export class NotasNotaComponent  {
  @Input() datos: any;

  isExpanded: boolean = false;

  toggleExpanded(event: Event) {
    // let target = event.currentTarget as HTMLElement
    // console.log(getComputedStyle(target).height)
    this.isExpanded = !this.isExpanded;
    
  }

  constructor() { }

}
