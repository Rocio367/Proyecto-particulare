import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditarPerfilAlumnoComponent } from './pages/editar-perfil-alumno/editar-perfil-alumno.component';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { RegistrarAlumnoComponent } from './pages/registrar-alumno/registrar-alumno.component';

const routes:Routes = [
  {path:'perfil-alumno', component:PerfilAlumnoComponent},
  {path:'editar-perfil-alumno', component:EditarPerfilAlumnoComponent},
  {path:'registrar-alumno', component:RegistrarAlumnoComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AlumnoRoutingModule { }
