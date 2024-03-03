import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.page.html',
  styleUrls: ['./image-view.page.scss'],
})
export class ImageViewPage implements OnInit {
  image: string;
  item: string;

  constructor(private route: ActivatedRoute, private fs: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.image = params['image'];
    });
    this.item = this.image.split('/')[7]
    this.item = decodeURI(this.item)
    this.item =this.item.split('?')[0]
    this.item = decodeURIComponent(this.item)
    console.log(this.image,'fromimage', this.item)
  }

  public deleteImg(){
    this.fs.deleteImage(this.item)
    this.router.navigate(['/home'])
    console.log('deleteImg', this.item)
  }

}
