import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelPageRoutingModule } from './nivel-routing.module';

import { NivelPage } from './nivel.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ComponentModuleModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelPageRoutingModule,
    ComponentModuleModule
  ],
  declarations: [NivelPage]
})
export class NivelPageModule { }
