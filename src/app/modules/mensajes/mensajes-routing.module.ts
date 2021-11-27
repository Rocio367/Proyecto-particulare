import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { ModalResponderComponent } from './components/modal-responder/modal-responder.component';
import { RecibidosComponent } from './components/recibidos/recibidos.component';
import { EnviadosComponent } from './components/enviados/enviados.component';
import { PapeleraComponent } from './components/papelera/papelera.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes:Routes = [
  {path:'nuevo-mensaje', component:ModalResponderComponent,canActivate: [AuthGuard]},
  {path:'recibidos', component:RecibidosComponent,canActivate: [AuthGuard]},
  {path:'enviados', component:EnviadosComponent,canActivate: [AuthGuard]},
  {path:'papelera', component:PapeleraComponent,canActivate: [AuthGuard]},
  {path:'mensajes', component:MensajesComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MensajesRoutingModule { }
