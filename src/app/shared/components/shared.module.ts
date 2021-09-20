import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';
import {ShellModule} from '../../modules/shell/shell.module';
import {IvyGalleryModule} from 'angular-gallery';
import {BrowserModule} from '@angular/platform-browser';
import { ModalConsultaComponent } from './modal-consulta/modal-consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ModalGeneralComponent } from './modal-general/modal-general.component';

@NgModule({
  declarations:[  ModalConsultaComponent,ModalGalleryComponent, ModalGeneralComponent],
  imports:[IvyGalleryModule,CommonModule, ShellModule, MatToolbarModule,FormsModule,BrowserModule,ReactiveFormsModule,AngularMaterialModule],
  providers:[],
  exports:[ModalGeneralComponent,ModalGalleryComponent,ModalConsultaComponent],
  entryComponents:[]
})
export class SharedModule {
}
