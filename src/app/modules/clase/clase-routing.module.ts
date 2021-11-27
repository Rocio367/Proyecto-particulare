import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClaseComponent } from './pages/detalle-clase/detalle-clase.component';
import { CrearClaseComponent } from './pages/crear-clase/crear-clase.component';
import { VerMisClasesParticularComponent } from './pages/ver-mis-clases-particular/ver-mis-clases-particular.component';
import { DetalleClaseParticularComponent } from './pages/detalle-clase-particular/detalle-clase-particular.component';
import { EditarClaseParticularComponent } from './pages/editar-clase-particular/editar-clase-particular.component';
import { ReunionComponent } from './pages/reunion/reunion.component';
import { MisClasesPendientesAlumnoComponent } from './pages/mis-clases-pendientes-alumno/mis-clases-pendientes-alumno.component';
import { MiHistorialDeClasesAlumnoComponent } from './pages/mi-historial-de-clases-alumno/mi-historial-de-clases-alumno.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ParticularGuard } from 'src/app/core/guards/particular.guard';
import { AlumnoGuard } from 'src/app/core/guards/alumno.guards';
import { AlumnoModule } from '../alumno/alumno.module';



const routes: Routes = [
  { path: 'detalle-clase', component: DetalleClaseComponent },
  { path: 'editar-detalle-clase-particular', component: EditarClaseParticularComponent ,canActivate: [AuthGuard,ParticularGuard]},
  { path: 'detalle-clase-particular', component: DetalleClaseParticularComponent ,canActivate: [AuthGuard,ParticularGuard]},
  { path: 'crear-clase', component: CrearClaseComponent,canActivate: [AuthGuard,ParticularGuard]},
  { path: 'ver-clase-particular', component: VerMisClasesParticularComponent ,canActivate: [AuthGuard,ParticularGuard]},
  { path: 'mis-clases-alumno', component: MisClasesPendientesAlumnoComponent,canActivate: [AuthGuard,AlumnoGuard]},
  { path: 'historial-alumno', component: MiHistorialDeClasesAlumnoComponent ,canActivate: [AuthGuard,AlumnoGuard]},
  { path: 'reunion', component: ReunionComponent ,canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule { }
