import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ref, uploadString, listAll, getDownloadURL, getStorage, deleteObject } from 'firebase/storage';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  public images: string[] = [];
  public isLoading: boolean = true;

  ngOnInit() {

    this.fetchImages();
  }
  
  ionViewWillEnter() {
    this.fetchImages();
  }

  constructor(private auth: AuthService, private fs: FirestoreService) {}

  private async fetchImages() {
    this.isLoading = true;

    this.images = [];

    listAll(ref(this.fs.storage, `${this.auth.returnUserState()?.uid}`)).then(
      (res) => {
        // console.log(res.items, 'items XDDXDX');
        const downloadURLPromises: Promise<string>[] = res.items.map((item) =>
          getDownloadURL(
            ref(
              this.fs.storage,
              `${this.auth.returnUserState()?.uid}/${item.name}`
            )
          )
        );

        Promise.all(downloadURLPromises)
          .then((urls) => {
            this.images = urls;
            this.isLoading = false;
          })
          .catch((error) => {
            console.error('Error fetching download URLs:', error);
            this.isLoading = false;
          });
      }
    );
  }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
  }

  private convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  public async takePicture() {
    let image;

    let b64: string = '';

    image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    })
      .then(async (imagen) => {
        console.log(imagen);
        image = imagen;
        b64 = (await this.readAsBase64(image)).valueOf();
      })
      .catch((error) => {
        console.log(error, 'ERORR?!!!!!!!!!!');
      });


    uploadString(
      ref(this.fs.storage, `${this.auth.returnUserState()?.uid}/${Date.now()}`),
      b64,
      'data_url'
    ).then((snapshot) => {
      console.log('Uploaded a base64 string!', snapshot);
      this.fetchImages();
    });
  }


}
