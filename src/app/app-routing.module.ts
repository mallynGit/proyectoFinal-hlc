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
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./pages/calculadora/calculadora.module').then( m => m.CalculadoraPageModule),
    canActivate: [AuthGuard]
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
    loadChildren: () => import('./pages/nivel/nivel.module').then( m => m.NivelPageModule)
  },
  {
    path: 'image-view',
    loadChildren: () => import('./pages/image-view/image-view.module').then( m => m.ImageViewPageModule)
  },
  {
    path: 'nota-view',
    loadChildren: () => import('./pages/nota-view/nota-view.module').then( m => m.NotaViewPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module').then( m => m.GroupsPageModule)
  },  {
    path: 'group-view',
    loadChildren: () => import('./pages/group-view/group-view.module').then( m => m.GroupViewPageModule)
  },


  // {
  //   path: 'image-view',
  //   loadChildren: () => import('./components/image-view/image-view.module').then( m => m.ImageViewModule)
  // }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
