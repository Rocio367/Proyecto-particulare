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
import {TableModule} from 'primeng/table';
import {OrderListModule} from 'primeng/orderlist';
import {GalleriaModule} from 'primeng/galleria';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import { CalendarDetalleClaseParticularComponent } from './components/calendar-detalle-clase-particular/calendar-detalle-clase-particular.component';
import { DetalleClaseParticularComponent } from './pages/detalle-clase-particular/detalle-clase-particular.component';
import { EditarClaseParticularComponent } from './pages/editar-clase-particular/editar-clase-particular.component';
import { CalendarCompletarComponent } from './components/calendar-completar/calendar-completar.component';
import { CalendarEditarComponent } from './components/calendar-editar/calendar-editar.component';


@NgModule({
  declarations:[CalendarEditarComponent,DetalleClaseComponent, PagoComponent, CalendarDetalleClaseComponent, CrearClaseComponent, VerMisClasesParticularComponent, CalendarDetalleClaseParticularComponent, DetalleClaseParticularComponent, EditarClaseParticularComponent, CalendarCompletarComponent],
  imports:[ CardModule,FieldsetModule,
    ButtonModule,
    ListboxModule,
    CalendarModule, CommonModule,SharedModule,RouterModule,AngularMaterialModule,InputTextModule,
    InputTextareaModule,DropdownModule,DataViewModule,CheckboxModule,SelectButtonModule,
    TableModule,OrderListModule,GalleriaModule,FileUploadModule,ToastModule ],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ClaseModule { }
