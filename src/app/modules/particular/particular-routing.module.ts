import { NgModule } from '@angular/core';
import { EditarPerfilParticularComponent } from './pages/editar-perfil-particular/editar-perfil-particular.component';
import { Routes, RouterModule } from '@angular/router';
import { PerfilParticularComponent } from './pages/perfil-particular/perfil-particular.component';
import { RegistrarParticularComponent } from './pages/registrar-particular/registrar-particular.component';
import { ComentariosParticularComponent } from './pages/comentarios-particular/comentarios-particular.component';
import { MiPerfilParticularComponent } from './pages/mi-perfil-particular/mi-perfil-particular.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ParticularGuard } from 'src/app/core/guards/particular.guard';
const routes:Routes = [
  {path:'mi-perfil-particular', component:MiPerfilParticularComponent,canActivate: [AuthGuard,ParticularGuard]},
  {path:'perfil-particular', component:PerfilParticularComponent},
  {path:'editar-perfil-particular', component:EditarPerfilParticularComponent,canActivate: [AuthGuard,ParticularGuard]},
  {path:'registrar-particular', component:RegistrarParticularComponent},
  {path:'comentarios-particular', component:ComentariosParticularComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ParticularRoutingModule { }
