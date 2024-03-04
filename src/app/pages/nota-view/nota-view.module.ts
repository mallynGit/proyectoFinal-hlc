import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotaViewPageRoutingModule } from './nota-view-routing.module';

import { NotaViewPage } from './nota-view.page';
import { DatestringPipe } from "../../pipes/datestring.pipe";

@NgModule({
    declarations: [NotaViewPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NotaViewPageRoutingModule,
        DatestringPipe
    ]
})
export class NotaViewPageModule {}
