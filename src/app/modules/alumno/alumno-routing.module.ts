import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoGuard } from 'src/app/core/guards/alumno.guards';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EditarPerfilAlumnoComponent } from './pages/editar-perfil-alumno/editar-perfil-alumno.component';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { RegistrarAlumnoComponent } from './pages/registrar-alumno/registrar-alumno.component';

const routes:Routes = [
  {path:'perfil-alumno', component:PerfilAlumnoComponent,canActivate: [AuthGuard]},
  {path:'editar-perfil-alumno', component:EditarPerfilAlumnoComponent,canActivate: [AuthGuard,AlumnoGuard]},
  {path:'registrar-alumno', component:RegistrarAlumnoComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AlumnoRoutingModule { }
