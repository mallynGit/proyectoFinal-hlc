import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasPageRoutingModule } from './notas-routing.module';

import { NotasPage } from './notas.page';
import { NotasNotaComponent } from 'src/app/components/notas-nota/notas-nota.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasPageRoutingModule
  ],
  declarations: [NotasPage, NotasNotaComponent]
})
export class NotasPageModule {}
