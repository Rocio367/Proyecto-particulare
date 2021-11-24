import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlDeUsuariosComponent } from './pages/control-de-usuarios/control-de-usuarios.component';
import { GraficoGananciasAdministradorComponent } from './pages/grafico-ganancias-administrador/grafico-ganancias-administrador.component';
import { GraficosGananciasProfesorComponent } from './pages/graficos-ganancias-profesor/graficos-ganancias-profesor.component';


const routes:Routes = [
  {path:'ganancias-particular', component:GraficosGananciasProfesorComponent},
  {path:'ganancias-administrador', component:GraficoGananciasAdministradorComponent},
  {path:'control-usuarios', component:ControlDeUsuariosComponent},


];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdministradorRoutingModule { }
