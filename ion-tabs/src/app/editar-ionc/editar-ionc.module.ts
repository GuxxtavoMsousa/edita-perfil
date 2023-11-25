import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarIoncPageRoutingModule } from './editar-ionc-routing.module';

import { EditarIoncPage } from './editar-ionc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarIoncPageRoutingModule
  ],
  declarations: [EditarIoncPage]
})
export class EditarIoncPageModule {}
