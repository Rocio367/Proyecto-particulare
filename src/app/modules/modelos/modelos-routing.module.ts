import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModelosAlumnoComponent } from './pages/modelos-alumno/modelos-alumno.component';
import { ModelosParticularesComponent } from './pages/modelos-particulares/modelos-particulares.component';
import { DetalleModeloParticularComponent } from './pages/detalle-modelo-particular/detalle-modelo-particular.component';
import { DetalleModeloAlumnoComponent } from './pages/detalle-modelo-alumno/detalle-modelo-alumno.component';

const routes:Routes = [
  {path:'modelos', component:ModelosAlumnoComponent},
  {path:'modelos-particular', component:ModelosParticularesComponent},
  {path:'detalle-modelo-alumno/:id', component:DetalleModeloAlumnoComponent},
  {path:'detalle-modelo-particular/:id', component:DetalleModeloParticularComponent},

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ModelosRoutingModule { }
