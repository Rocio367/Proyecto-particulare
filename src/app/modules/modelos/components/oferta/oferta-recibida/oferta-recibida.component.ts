import { Component, Input, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ParticularService } from "src/app/core/services/particular/particular.service";
import { ProductosService } from "src/app/core/services/productos/productos.service";
import { ReseniaService } from "src/app/core/services/resenia/resenia.service";
import { Documento } from "src/app/shared/models/documento";
import { OfertaDeResolucionResponse } from "src/app/shared/models/oferta-resolucion-response";
import { ModalContratarModelosComponent } from "../../modal-contratar-modelos/modal-contratar-modelos.component";
import { PagoContratarComponent } from "../../pago-contratar/pago-contratar.component";

@Component({
  selector: 'app-oferta-recibida',
  templateUrl: './oferta-recibida.component.html',
  styleUrls: ['./oferta-recibida.component.scss'],
  providers: [DialogService]

})
export class OfertaRecibida implements OnInit {
  @Input() ofertaDeResolucion: OfertaDeResolucionResponse;
  selectedType = '1';
  tipos: any[] = [{ code: '1', name: 'Contratar solo resolución', },
  { code: '2', name: 'Contratar resolución y explicacion' },]
  idAlumno: string
  comprando: boolean = false;
  selected = 0;
  item: any = {};
  mostrarOpciones = false;
  referenciaDialogoDinamico: DynamicDialogRef;
  providers: [DialogService]
  constructor(public dialogService: DialogService, public snackBar: MatSnackBar, private servicesParticular: ParticularService,
    private reseniaServices: ReseniaService) {
    this.item.valoracion = 5;
  }
  ngOnInit(): void {
    this.servicesParticular.obtenerFotoPerfilPorUsuario(this.ofertaDeResolucion.usuario.id).subscribe(res => {
      this.ofertaDeResolucion.foto = this.obtenerImagenEnBase64(res[0])
    })
    this.servicesParticular.buscarPorIdProfesor(this.ofertaDeResolucion.usuario.id).subscribe(p => {
      this.reseniaServices.obtenerReseniasDelParticular(p.id).subscribe(res => {
        let total = 0;
        let cant = res.length;
        if (cant > 0) {
          res.forEach(v => {
            total = total + v.puntaje;
          });
          this.ofertaDeResolucion.valoracion = Math.round(total / cant);
        } else {

          this.ofertaDeResolucion.valoracion = 0;
        }

      })
    })

    this.idAlumno = localStorage.getItem('idUser');
  }

  contratar() {
    if (this.ofertaDeResolucion.tipo.id == 2) {
      this.mostrarOpciones = true;
    } else {
      this.confirmar()
    }
  }
  addSelected(event) {
    this.selected = event;
  }
  cancelar() {
    this.selected = null;
    this.mostrarOpciones = false;
  }
  confirmar() {

    if (this.ofertaDeResolucion.tipo.id == 2 && this.selected || this.ofertaDeResolucion.tipo.id == 1) {
      this.comprando = true;
      this.referenciaDialogoDinamico = this.dialogService.open(PagoContratarComponent, {
        data: {
          idUsuario: this.idAlumno,
          ids: [this.ofertaDeResolucion.id],
          tipo: Number(this.ofertaDeResolucion.tipo.id),
          fecha: this.selected,
          ofertaDeResolucion: this.ofertaDeResolucion.id
        },
        width: '90%',
        height: '90%',
      });
    } else {
      this.snackBar.open('Debe seleccionar alguna fecha', "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['red-snackbar']
      });
    }


  }
  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }
}