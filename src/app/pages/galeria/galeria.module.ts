import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaPageRoutingModule } from './galeria-routing.module';

import { GaleriaPage } from './galeria.page';
import { GalleryImageComponent } from 'src/app/components/gallery-image/gallery-image.component';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaPageRoutingModule,
    PinchZoomModule
  ],
  declarations: [GaleriaPage, GalleryImageComponent]
})
export class GaleriaPageModule {}
