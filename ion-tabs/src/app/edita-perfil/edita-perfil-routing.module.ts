import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaPerfilPage } from './edita-perfil.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: EditaPerfilPage
  }, 
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaPerfilPageRoutingModule {}
