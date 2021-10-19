import { Component } from '@angular/core';
import { Paso } from 'src/app/shared/models/paso';

@Component({
  selector: 'app-primeros-pasos',
  templateUrl: './primeros-pasos.component.html',
  styleUrls: ['./primeros-pasos.component.scss']
})
export class PrimerosPasosComponent {

  private urlBaseImagen: string = '../../../../../assets/img';
  pasos: Paso[];
  
  constructor() {

    this.pasos = [
      this.crearPaso('Paso 1', 'Buscá tu profe ideal', 'lupa.jpg'), 
      this.crearPaso('Paso 2', 'Registrate', 'registro.jpg'), 
      this.crearPaso('Paso 3', 'Contratá una clase', 'contrato.png'),
      this.crearPaso('Paso 4', 'Aprendé con nosotros', 'aprender.png')
    ];
  }

  private crearPaso(titulo: string, descripcion: string, nombreImagen: string): Paso {
    return {
      titulo: titulo,
      descripcion: descripcion,
      urlImagen: this.urlBaseImagen + '/' + nombreImagen
    }
  }

}