import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaPageRoutingModule } from './galeria-routing.module';

import { GaleriaPage } from './galeria.page';
import { GalleryImageComponent } from 'src/app/components/gallery-image/gallery-image.component';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';
import { ComponentModuleModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaPageRoutingModule,
    PinchZoomModule, 
    ComponentModuleModule
  ],
  declarations: [GaleriaPage]
})
export class GaleriaPageModule { }
