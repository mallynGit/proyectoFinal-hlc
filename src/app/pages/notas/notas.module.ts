import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasPageRoutingModule } from './notas-routing.module';

import { NotasPage } from './notas.page';
import { NotasNotaComponent } from 'src/app/components/notas-nota/notas-nota.component';
import { ComponentModuleModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasPageRoutingModule,
    ComponentModuleModule
  ],
  declarations: [NotasPage]
})
export class NotasPageModule {}
