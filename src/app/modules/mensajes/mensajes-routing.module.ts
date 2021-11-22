import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { ModalResponderComponent } from './components/modal-responder/modal-responder.component';
import { RecibidosComponent } from './components/recibidos/recibidos.component';
import { EnviadosComponent } from './components/enviados/enviados.component';
import { PapeleraComponent } from './components/papelera/papelera.component';

const routes:Routes = [
  {path:'nuevo-mensaje', component:ModalResponderComponent},
  {path:'recibidos', component:RecibidosComponent},
  {path:'enviados', component:EnviadosComponent},
  {path:'papelera', component:PapeleraComponent},
  {path:'mensajes', component:MensajesComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MensajesRoutingModule { }
