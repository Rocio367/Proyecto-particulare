import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { DetalleClaseComponent } from './pages/detalle-clase/detalle-clase.component';
import { PagoComponent } from './pages/pago/pago.component';
import { CalendarDetalleClaseComponent } from './components/calendar-detalle-clase/calendar-detalle-clase.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { ListboxModule } from 'primeng/listbox';
import {CardModule} from 'primeng/card';
import { CrearClaseComponent } from './pages/crear-clase/crear-clase.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { VerMisClasesParticularComponent } from './pages/ver-mis-clases-particular/ver-mis-clases-particular.component';
import {DropdownModule} from 'primeng/dropdown';
import {DataViewModule} from 'primeng/dataview';
import {CheckboxModule} from 'primeng/checkbox';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  declarations:[DetalleClaseComponent, PagoComponent, CalendarDetalleClaseComponent, CrearClaseComponent, VerMisClasesParticularComponent],
  imports:[ CardModule,FieldsetModule,
    ButtonModule,
    ListboxModule,
    CalendarModule, CommonModule,SharedModule,RouterModule,AngularMaterialModule,InputTextModule,
    InputTextareaModule,DropdownModule,DataViewModule,CheckboxModule,SelectButtonModule ],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ClaseModule { }
