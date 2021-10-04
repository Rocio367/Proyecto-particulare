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


@NgModule({
  declarations:[RegistrarAlumnoComponent, EditarPerfilAlumnoComponent,PerfilAlumnoComponent, TablaComponent],
  imports:[ CommonModule,SharedModule,RouterModule,AngularMaterialModule, NgxMatFileInputModule],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AlumnoModule { }
