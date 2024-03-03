// alert.service.ts
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async presentNamePrompt(msg?: string): Promise<string | null> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: msg,
        inputs: [
          {
            name: 'name',
            type: 'text',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve(null);
            },
          },
          {
            text: 'Ok',
            handler: (data) => {
              resolve(data.name);
            },
          },
        ],
        cssClass: 'custom-alert',
      });
      await alert.present();
    });
  }

  public async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK'],
    })
    await alert.present()
  }

}
