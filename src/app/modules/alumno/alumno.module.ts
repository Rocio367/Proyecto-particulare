import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { EditarPerfilAlumnoComponent } from './pages/editar-perfil-alumno/editar-perfil-alumno.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { RegistrarAlumnoComponent } from './pages/registrar-alumno/registrar-alumno.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';


@NgModule({
  declarations:[RegistrarAlumnoComponent, EditarPerfilAlumnoComponent,PerfilAlumnoComponent, TablaComponent],
  imports:[ CommonModule,SharedModule,RouterModule,AngularMaterialModule, NgxMatFileInputModule, CalendarModule, 
            InputTextModule, InputTextareaModule, CardModule, ButtonModule, DividerModule, DataViewModule, TableModule,DropdownModule,FileUploadModule ],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AlumnoModule { }
