import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ModelosService } from 'src/app/core/services/modelos/modelos.service';
import { OfertaDeResolucion } from 'src/app/shared/models/pedido-postulacion';
import { TipoDeDemora } from 'src/app/shared/models/tipo-de-demora';
import { TipoDeResolucion } from 'src/app/shared/models/tipo-de-resolucion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-postulacion-modelos',
  templateUrl: './modal-postulacion-modelos.component.html',
  styleUrls: ['./modal-postulacion-modelos.component.scss']
})
export class ModalPostulacionModelosComponent implements OnInit {

  tiposResolucion: TipoDeResolucion[];
  tiposDeDemoras: TipoDeDemora[];

  formularioDePostulacion: FormGroup;

  idModelo: Number;

  constructor(private form: FormBuilder, private router: Router, private servicioDeModelo: ModelosService, private config: DynamicDialogConfig) {
    this.formularioDePostulacion = this.form.group({
      tipoDeResolucion: ['', Validators.required],
      tipoDeDemora: ['', Validators.required],
      costo: ['', Validators.required]
    });
    this.idModelo = this.config.data.idModelo;
  }

  ngOnInit(): void {
    this.servicioDeModelo.obtenerTiposDeResolucion().subscribe((tiposDeResolicion) => {
      this.tiposResolucion = tiposDeResolicion;
    });
    this.servicioDeModelo.obtenerTiposDeDemora().subscribe((tiposDeDemoras) => {
      this.tiposDeDemoras = tiposDeDemoras;
    });
  }

  confirmar() {

    if(this.formularioDePostulacion.valid) {

      let ofertaDeResolucion: OfertaDeResolucion = {
        tipoResolucion: this.formularioDePostulacion.controls['tipoDeResolucion'].value,
        tipoDeDemora: this.formularioDePostulacion.controls['tipoDeDemora'].value,
        costo: this.formularioDePostulacion.controls['costo'].value
      }

      this.servicioDeModelo.ofertarResolucion(ofertaDeResolucion, this.idModelo)
        .subscribe(
          () => {
          Swal.fire(
            'Te postulaste con éxito',
            '',
            'success');
          },
          (error) => console.error(error));
    } else {
      this.formularioDePostulacion.markAllAsTouched();
    }
  }
}
