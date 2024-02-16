import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotaViewPage } from './nota-view.page';

const routes: Routes = [
  {
    path: '',
    component: NotaViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotaViewPageRoutingModule {}
