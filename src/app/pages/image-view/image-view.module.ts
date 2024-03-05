import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageViewPageRoutingModule } from './image-view-routing.module';

import { ImageViewPage } from './image-view.page';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';
import { ComponentModuleModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageViewPageRoutingModule, 
    PinchZoomModule,
    ComponentModuleModule
  ],
  declarations: [ImageViewPage]
})
export class ImageViewPageModule { }
