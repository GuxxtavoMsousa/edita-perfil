import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarIoncPage } from './editar-ionc.page';

const routes: Routes = [
  {
    path: '',
    component: EditarIoncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarIoncPageRoutingModule {}
