import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModelosAlumnoComponent } from './pages/modelos-alumno/modelos-alumno.component';
import { ModelosParticularesComponent } from './pages/modelos-particulares/modelos-particulares.component';
import { DetalleModeloParticularComponent } from './pages/detalle-modelo-particular/detalle-modelo-particular.component';
import { DetalleModeloAlumnoComponent } from './pages/detalle-modelo-alumno/detalle-modelo-alumno.component';
import { ModalSubirArchivoComponent } from './components/modal-subir-archivo/modal-subir-archivo.component';
import { MisModelosAlumnoComponent } from './components/mis-modelos-alumno/mis-modelos-alumno.component';
import { BuscadorDeArchivosComponent } from './components/buscador-de-archivos/buscador-de-archivos.component';
import { BuscadorDeArchivosParticularComponent } from './components/buscador-de-archivos-particular/buscador-de-archivos-particular.component';
import { MisModelosParticularComponent } from './components/mis-modelos-particular/mis-modelos-particular.component';

const routes:Routes = [
  {path:'nuevo-modelo', component:ModalSubirArchivoComponent},
  {path:'buscar-modelos-alumno', component:BuscadorDeArchivosComponent},
  {path:'mis-modelos-alumno', component:MisModelosAlumnoComponent},
  {path:'buscar-modelos-particular', component:BuscadorDeArchivosParticularComponent},
  {path:'mis-modelos-particular', component:MisModelosParticularComponent},
  {path:'detalle-modelo-alumno', component:DetalleModeloAlumnoComponent},
  {path:'detalle-modelo-particular', component:DetalleModeloParticularComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ModelosRoutingModule { }
