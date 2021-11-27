import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleModeloParticularComponent } from './pages/detalle-modelo-particular/detalle-modelo-particular.component';
import { DetalleModeloAlumnoComponent } from './pages/detalle-modelo-alumno/detalle-modelo-alumno.component';
import { ModalSubirArchivoComponent } from './components/modal-subir-archivo/modal-subir-archivo.component';
import { MisModelosAlumnoComponent } from './components/mis-modelos-alumno/mis-modelos-alumno.component';
import { BuscadorDeArchivosComponent } from './components/buscador-de-archivos/buscador-de-archivos.component';
import { BuscadorDeArchivosParticularComponent } from './components/buscador-de-archivos-particular/buscador-de-archivos-particular.component';
import { MisModelosParticularComponent } from './components/mis-modelos-particular/mis-modelos-particular.component';
import { AlumnoGuard } from 'src/app/core/guards/alumno.guards';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ParticularGuard } from 'src/app/core/guards/particular.guard';

const routes:Routes = [
  {path:'nuevo-modelo', component:ModalSubirArchivoComponent,canActivate: [AuthGuard,AlumnoGuard]},
  {path:'buscar-modelos-alumno', component:BuscadorDeArchivosComponent,canActivate: [AuthGuard,AlumnoGuard]},
  {path:'mis-modelos-alumno', component:MisModelosAlumnoComponent,canActivate: [AuthGuard,AlumnoGuard]},
  {path:'buscar-modelos-particular', component:BuscadorDeArchivosParticularComponent,canActivate: [AuthGuard,ParticularGuard]},
  {path:'mis-modelos-particular', component:MisModelosParticularComponent,canActivate: [AuthGuard,ParticularGuard]},
  {path:'detalle-modelo-alumno', component:DetalleModeloAlumnoComponent,canActivate: [AuthGuard,AlumnoGuard]},
  {path:'detalle-modelo-particular', component:DetalleModeloParticularComponent,canActivate: [AuthGuard,ParticularGuard]},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ModelosRoutingModule { }
