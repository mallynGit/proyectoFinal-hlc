import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota-view',
  templateUrl: './nota-view.page.html',
  styleUrls: ['./nota-view.page.scss'],
})
export class NotaViewPage {
  @Input() title: string;
  @Input() content: string;
  @Input() id: string;


  constructor() { }


}
