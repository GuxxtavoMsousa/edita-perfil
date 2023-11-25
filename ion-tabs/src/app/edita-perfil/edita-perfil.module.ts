import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaPerfilPageRoutingModule } from './edita-perfil-routing.module';

import { EditaPerfilPage } from './edita-perfil.page';
import { AbasComponent } from '../abas/abas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaPerfilPageRoutingModule
  ],
  declarations: [EditaPerfilPage, AbasComponent]
})
export class EditaPerfilPageModule {}
