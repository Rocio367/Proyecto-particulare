import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { DetalleClase } from 'src/app/shared/models/detalleClase';
import { ProcesoDeCompra } from 'src/app/shared/models/proceso-de-compra';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  cargandoPago: boolean;
  procesoDeCompra: ProcesoDeCompra;
  private clase: DetalleClase;
  private detalles: any[];
  private idUsuario;
  url: string;

  constructor(private productosService: ProductosService,
    public config: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private _domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.cargandoPago = true;
    this.clase = this.config.data.clase;
    this.idUsuario = this.config.data.idUsuario;
    this.detalles = this.config.data.detalles;

    const pedidoDeCompra = {
      idUsuario: this.idUsuario,
      ids: this.detalles
    }
    this.cargandoPago = false;

    console.log(pedidoDeCompra)
    this.productosService.iniciarCompra(this.clase.id, pedidoDeCompra)
      .subscribe(
        (procesoDeCompra) => {
          console.log(procesoDeCompra)
          this.procesoDeCompra = procesoDeCompra;
          this.url = procesoDeCompra.urlExterna;
          this.cargandoPago = false;
          //   this.dialogRef.close();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  transform(url: string): any {

    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);

  }
}
