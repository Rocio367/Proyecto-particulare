import { Component, Input, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ProductosService } from "src/app/core/services/productos/productos.service";
import { OfertaDeResolucionResponse } from "src/app/shared/models/oferta-resolucion-response";
import { ModalContratarModelosComponent } from "../modal-contratar-modelos/modal-contratar-modelos.component";

@Component({
  selector: 'app-oferta-recibida',
  templateUrl: './oferta-recibida.component.html',
  styleUrls: ['./oferta-recibida.component.scss']
})
export class OfertaRecibida implements OnInit {
  @Input() ofertaDeResolucion: OfertaDeResolucionResponse;
  selectedType = '1';
  tipos: any[] = [{ code: '1', name: 'Contratar solo resolución', },
  { code: '2', name: 'Contratar resolución y explicacion' },]
  @Input() idAlumno: number
  comprando: boolean = false;
  selected=0;
  item: any = {};
  mostrarOpciones = false;
  constructor(private productosService: ProductosService,public snackBar: MatSnackBar,) {
    this.item.valoracion = 5;
  }
  ngOnInit(): void {
    console.log(this.ofertaDeResolucion)
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
  cancelar(){
    this.selected=null;
    this.mostrarOpciones=false;
  }
  confirmar() {
    const pedidoDeCompra = {
      idUsuario: this.idAlumno,
      ids: [this.ofertaDeResolucion.id],
      tipo: Number(this.ofertaDeResolucion.tipo.id),
      fecha: this.selected
    };
    console.log(pedidoDeCompra)
    if (this.ofertaDeResolucion.tipo.id == 2 && this.selected || this.ofertaDeResolucion.tipo.id == 1) {
      this.comprando = true;
         this.productosService.iniciarCompra(this.ofertaDeResolucion.id, pedidoDeCompra)
           .subscribe((procesoDeCompra) => {
             window.open(procesoDeCompra.urlExterna, "_blank");
             this.comprando = false;
           },
           err =>{
            this.snackBar.open(localStorage.getItem('errorMensaje'), "", {
              duration: 3000,
              horizontalPosition: "end",
              verticalPosition: "top",
              panelClass: ['red-snackbar']
            });
            this.comprando=false;
           })
    }else{
      this.snackBar.open('Debe seleccionar alguna fecha', "", {
        duration: 1500,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ['red-snackbar']
      });
    }


  }
}
