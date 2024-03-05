import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NotasNotaComponent } from './notas-nota/notas-nota.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, LoginFormComponent, RegisterFormComponent, NotasNotaComponent, GalleryImageComponent],
  exports: [HeaderComponent, LoginFormComponent, RegisterFormComponent, NotasNotaComponent, GalleryImageComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentModuleModule { }
