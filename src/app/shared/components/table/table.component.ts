import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';


export interface PeriodicElement {
  name: string;
  position: number;
  user: string;
  estado: string;
  bloquear: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Rocio Centurion', user: 'admin', estado: 'Normal', bloquear: true},
  {position: 2, name: 'Fiorella Coloca', user:'admin' , estado: 'Normal',bloquear: true},
  {position: 3, name: 'Lucas Di Nubila', user: 'admin', estado: 'Normal',bloquear: true},
  {position: 4, name: 'Rocio Isaurralde', user:'admin', estado: 'Normal',bloquear: true},
  {position: 5, name: 'Usuario', user: 'alumno', estado: 'Normal',bloquear: true},
  {position: 6, name: 'Usuario1', user: 'particular', estado: 'Eliminado',bloquear: true},
  {position: 7, name: 'Usuario2', user:'particular', estado: 'Bloqueado',bloquear: false},
  {position: 8, name: 'Usuario3', user: 'particular', estado: 'Normal',bloquear: true},
  {position: 9, name: 'Usuario4', user: 'alumno', estado: 'Normal',bloquear: true},
  {position: 10, name: 'Usuario5', user: 'alumno', estado: 'Normal',bloquear: true},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'user', 'estado',  'eliminar', 'bloquear' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete() {

    Swal.fire(
      'El usuario ha sido eliminado',
      '',
      'success'
    )
  }

  bloqueo() {

    Swal.fire(
      'El usuario ha sido bloqueado',
      '',
      'success'
    )
  }
}