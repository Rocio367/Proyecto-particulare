import { Component, OnInit } from '@angular/core';
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

  constructor(private productosService: ProductosService,
              public config: DynamicDialogConfig,
              private dialogRef: DynamicDialogRef) { }

  ngOnInit(): void {
    this.cargandoPago = true;
    this.clase = this.config.data.clase;
    // Lo hardcodeo porque clase no tiene id
    this.productosService.iniciarCompra(JSON.stringify(1))
      .subscribe(
        (procesoDeCompra) => {
          this.procesoDeCompra = procesoDeCompra;
          window.open(procesoDeCompra.urlExterna, "_blank");
          this.cargandoPago = false;
          this.dialogRef.close();
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
