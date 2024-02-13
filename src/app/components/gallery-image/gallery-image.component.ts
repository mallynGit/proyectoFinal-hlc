import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss'],
})
export class GalleryImageComponent  {
  @Input() image: string;

  constructor() { }

  

}
