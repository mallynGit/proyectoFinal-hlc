import { Component, Input } from '@angular/core';

import { LoginFormComponent } from '../login-form/login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss'],
})
export class GalleryImageComponent {
  @Input() image: string;


  constructor(private router: Router) { }

  public navigate(){
    this.router.navigate(['/image-view'], {queryParams: {image: this.image}});
  }

}
