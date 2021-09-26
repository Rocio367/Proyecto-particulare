import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditarPerfilParticularComponent } from '../particular/pages/editar-perfil-particular/editar-perfil-particular.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

const routes:Routes = [
  {path:'mensajes', component:MensajesComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MensajesRoutingModule { }
