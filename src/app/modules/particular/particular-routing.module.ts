import { NgModule } from '@angular/core';
import { EditarPerfilParticularComponent } from './pages/editar-perfil-particular/editar-perfil-particular.component';
import { Routes, RouterModule } from '@angular/router';
import { PerfilParticularComponent } from './pages/perfil-particular/perfil-particular.component';
import { RegistrarParticularComponent } from './pages/registrar-particular/registrar-particular.component';
import { ComentariosParticularComponent } from './pages/comentarios-particular/comentarios-particular.component';
const routes:Routes = [
  {path:'perfil-particular', component:PerfilParticularComponent},
  {path:'editar-perfil-particular', component:EditarPerfilParticularComponent},
  {path:'registrar-particular', component:RegistrarParticularComponent},
  {path:'comentarios-particular', component:ComentariosParticularComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ParticularRoutingModule { }
