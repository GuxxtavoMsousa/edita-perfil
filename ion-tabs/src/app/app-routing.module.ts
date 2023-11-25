import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'edita-perfil',
    loadChildren: () => import('./edita-perfil/edita-perfil.module').then( m => m.EditaPerfilPageModule)
  },
  {
    path: '',
    redirectTo: 'edita-perfil',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'editar-ionc',
    loadChildren: () => import('./editar-ionc/editar-ionc.module').then( m => m.EditarIoncPageModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
