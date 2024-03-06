import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'nivel',
    loadChildren: () => import('./pages/nivel/nivel.module').then( m => m.NivelPageModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'image-view',
    loadChildren: () => import('./pages/image-view/image-view.module').then( m => m.ImageViewPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'nota-view',
    loadChildren: () => import('./pages/nota-view/nota-view.module').then( m => m.NotaViewPageModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
