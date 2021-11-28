import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { ProcesoDeCompra } from 'src/app/shared/models/proceso-de-compra';

@Component({
  selector: 'app-pago-contratar',
  templateUrl: './pago-contratar.component.html',
  styleUrls: ['./pago-contratar.component.scss']
})
export class PagoContratarComponent implements OnInit {
  cargandoPago: boolean;
  procesoDeCompra: ProcesoDeCompra;
  url: string;
  constructor(private _snackBar: MatSnackBar, private productosService: ProductosService,
    public config: DynamicDialogConfig,
    private _domSanitizer: DomSanitizer,
    private dialogRef: DynamicDialogRef) { }

  ngOnInit(): void {
    this.cargandoPago = true;
    this.productosService.iniciarCompra(this.config.data.ofertaDeResolucion, this.config.data)
      .subscribe((procesoDeCompra) => {
        this.procesoDeCompra = procesoDeCompra;
          this.url = procesoDeCompra.urlExterna;
          this.cargandoPago = false;
      },
        err => {
          this._snackBar.open(localStorage.getItem('errorMensaje'), "", {
            duration: 3000,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['red-snackbar']
          });
          this.cargandoPago = false;
        })
  }
  transform(url: string): any {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}




