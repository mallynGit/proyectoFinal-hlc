import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Camera, CameraResultType, Photo } from '@capacitor/camera'
import { FirestoreService } from 'src/app/services/firestore.service';
import { ref, uploadString, listAll, getDownloadURL } from 'firebase/storage'

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  private xd: HTMLImageElement
  public images: string[] = []

  constructor(private auth: AuthService, private fs: FirestoreService) { }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  public async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    })

    let b64 = (await this.readAsBase64(image)).valueOf();

    uploadString(ref(this.fs.storage, `${this.auth.returnUserState()?.uid}/${Date.now()}`), b64, 'data_url').then((snapshot) => {
      console.log('Uploaded a base64 string!');
    });
    // this.xd!.src = imageUrl
  }

  ngOnInit() {
    console.log(`${this.auth.returnUserState()?.uid}-${Date.now()}.jpg`);
    this.xd = document.getElementById('xd') as HTMLImageElement
    
    listAll(ref(this.fs.storage, `${this.auth.returnUserState()?.uid}`)).then((res) => {
      res.items.forEach(item => {
        getDownloadURL(ref(this.fs.storage, `${this.auth.returnUserState()?.uid}/${item.name}`)).then((url) => {
          this.images.push(url)
          console.log(this.images)          
        })
      })
    })

    

  }

}
