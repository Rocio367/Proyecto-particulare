import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { RecibidosComponent } from './components/recibidos/recibidos.component';
import { EnviadosComponent } from './components/enviados/enviados.component';
import { ModalResponderComponent } from './components/modal-responder/modal-responder.component';
import { PapeleraComponent } from './components/papelera/papelera.component';
import { MensajeDetalleComponent } from './components/mensaje-detalle/mensaje-detalle.component';



@NgModule({
  declarations: [MensajesComponent, RecibidosComponent, EnviadosComponent, ModalResponderComponent, PapeleraComponent, MensajeDetalleComponent],
  imports:[ CommonModule,SharedModule,RouterModule,AngularMaterialModule, ],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MensajesModule { }
