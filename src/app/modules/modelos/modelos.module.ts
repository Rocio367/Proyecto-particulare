import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ModelosParticularesComponent } from './pages/modelos-particulares/modelos-particulares.component';
import { ModelosAlumnoComponent } from './pages/modelos-alumno/modelos-alumno.component';
import { ModalSubirArchivoComponent } from './components/modal-subir-archivo/modal-subir-archivo.component';
import { BuscadorDeArchivosComponent } from './components/buscador-de-archivos/buscador-de-archivos.component';
import { MisModelosAlumnoComponent } from './components/mis-modelos-alumno/mis-modelos-alumno.component';
import { DetalleModeloAlumnoComponent } from './pages/detalle-modelo-alumno/detalle-modelo-alumno.component';
import { DetalleModeloParticularComponent } from './pages/detalle-modelo-particular/detalle-modelo-particular.component';
import { ModalContratarModelosComponent } from './components/modal-contratar-modelos/modal-contratar-modelos.component';
import { BuscadorDeArchivosParticularComponent } from './components/buscador-de-archivos-particular/buscador-de-archivos-particular.component';
import { MisModelosParticularComponent } from './components/mis-modelos-particular/mis-modelos-particular.component';
import { ModalPostulacionModelosComponent } from './components/modal-postulacion-modelos/modal-postulacion-modelos.component';
import { ModalValorarComponent } from './components/modal-valorar/modal-valorar.component';
import { OrderListModule } from 'primeng/orderlist';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from 'primeng/rating';
import { CalendarCompletarHorariosComponent } from './components/calendar-completar-horarios/calendar-completar-horarios.component';
import { CalendarModule } from 'primeng/calendar';
import { CalendarSeleccionComponent } from './components/calendar-seleccion/calendar-seleccion.component';
import { Oferta } from './components/oferta/oferta.component';
import { OfertaAceptada } from './components/oferta/oferta-aceptada/oferta-aceptada.component';
import { OfertaRecibida } from './components/oferta/oferta-recibida/oferta-recibida.component';
import { PagoContratarComponent } from './components/pago-contratar/pago-contratar.component';

@NgModule({
  declarations: [DetalleModeloAlumnoComponent, DetalleModeloParticularComponent, ModelosParticularesComponent, ModelosAlumnoComponent, ModalSubirArchivoComponent, BuscadorDeArchivosComponent, MisModelosAlumnoComponent, ModalContratarModelosComponent, BuscadorDeArchivosParticularComponent, MisModelosParticularComponent, ModalPostulacionModelosComponent, ModalValorarComponent, OfertaRecibida, CalendarCompletarHorariosComponent, CalendarSeleccionComponent, Oferta,OfertaAceptada, PagoContratarComponent,],
  imports: [CalendarModule, RatingModule, AutoCompleteModule, DropdownModule, DataViewModule, CheckboxModule, SelectButtonModule, CardModule, InputTextModule, InputTextareaModule, ToastModule, FileUploadModule, ButtonModule, GalleriaModule, OrderListModule, CommonModule, SharedModule, RouterModule, AngularMaterialModule, DynamicDialogModule, ProgressSpinnerModule,],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModelosModule { }
