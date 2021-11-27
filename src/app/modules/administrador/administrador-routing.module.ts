import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ParticularGuard } from 'src/app/core/guards/particular.guard';
import { ControlDeUsuariosComponent } from './pages/control-de-usuarios/control-de-usuarios.component';
import { GraficoGananciasAdministradorComponent } from './pages/grafico-ganancias-administrador/grafico-ganancias-administrador.component';
import { GraficosGananciasProfesorComponent } from './pages/graficos-ganancias-profesor/graficos-ganancias-profesor.component';


const routes:Routes = [
  {path:'ganancias-particular', component:GraficosGananciasProfesorComponent,canActivate: [AuthGuard,ParticularGuard]},
  {path:'ganancias-administrador', component:GraficoGananciasAdministradorComponent,canActivate: [AuthGuard,AdminGuard]},
  {path:'control-usuarios', component:ControlDeUsuariosComponent,canActivate: [AuthGuard,AdminGuard]},


];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdministradorRoutingModule { }
