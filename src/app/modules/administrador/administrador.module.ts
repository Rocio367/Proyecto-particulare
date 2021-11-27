import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { GraficosGananciasProfesorComponent } from './pages/graficos-ganancias-profesor/graficos-ganancias-profesor.component';
import { GraficoGananciasAdministradorComponent } from './pages/grafico-ganancias-administrador/grafico-ganancias-administrador.component';
import { ControlDeUsuariosComponent } from './pages/control-de-usuarios/control-de-usuarios.component';
import {ChartModule} from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations:[GraficosGananciasProfesorComponent, GraficoGananciasAdministradorComponent, ControlDeUsuariosComponent],
  imports:[DropdownModule,CalendarModule,ChartModule, CommonModule,SharedModule,RouterModule,AngularMaterialModule, ],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AdministradorModule { }
