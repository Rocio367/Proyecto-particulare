import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { ComentariosParticularComponent } from './pages/comentarios-particular/comentarios-particular.component';
import { EditarPerfilParticularComponent } from './pages/editar-perfil-particular/editar-perfil-particular.component';
import { PerfilParticularComponent } from './pages/perfil-particular/perfil-particular.component';
import { RegistrarParticularComponent } from './pages/registrar-particular/registrar-particular.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {RatingModule} from 'primeng/rating';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import { PerfiHeaderComponent } from './components/perfi-header/perfi-header.component';
import { MiPerfilParticularComponent } from './pages/mi-perfil-particular/mi-perfil-particular.component';

@NgModule({
  declarations:[ RegistrarParticularComponent, PerfilParticularComponent, EditarPerfilParticularComponent, ComentariosParticularComponent, PerfiHeaderComponent, MiPerfilParticularComponent],
  imports:[ FileUploadModule,CommonModule,SharedModule,RouterModule,AngularMaterialModule, NgxMatFileInputModule,CalendarModule, 
    InputTextModule, InputTextareaModule, CardModule, ButtonModule, DividerModule,RatingModule,TableModule,],
  exports:[],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ParticularModule { }
