import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.page.html',
  styleUrls: ['./image-view.page.scss'],
})
export class ImageViewPage implements OnInit {
  image: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.image = params['image'];
    });
  }

}
