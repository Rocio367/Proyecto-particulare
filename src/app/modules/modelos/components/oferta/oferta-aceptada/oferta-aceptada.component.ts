import { Component, Input, OnInit } from "@angular/core";
import { ModelosService } from "src/app/core/services/modelos/modelos.service";
import { OfertaDeResolucionResponse } from "src/app/shared/models/oferta-resolucion-response";
import { Resolucion } from "src/app/shared/models/resolucion";

@Component({
    selector: 'app-oferta-aceptada',
    templateUrl: './oferta-aceptada.component.html',
    styleUrls: ['./oferta-aceptada.component.scss']
})
export class OfertaAceptada implements OnInit {

    @Input()
    public ofertaDeResolucion: OfertaDeResolucionResponse;
    public resolucion: Resolucion;
    private estaCargando: boolean = true;
    // BORRAR ITEM
    public item: any = {
        doc: "prueba"
    };

    constructor(private servicioDeModelos: ModelosService) {}
    public ngOnInit() {
        this.servicioDeModelos.obtenerResolucionPorModelo(this.ofertaDeResolucion.modelo.id)
            .subscribe((resoluciones) => {
                this.resolucion = resoluciones.find((r) => r.usuario.id == this.ofertaDeResolucion.usuario.id);
                this.estaCargando = false;
            },
            (error) => console.error(error));
    }

    public cargando(): boolean {
        return this.estaCargando;
    }

    public estaResuelto(): boolean {
        return this.resolucion !== undefined;
    }

    public puedeValorarResolucion(): boolean {
        return true;
    }

    public valorar(): void {
        //this.dialog.open(ModalValorarComponent, { panelClass: 'custom-dialog-container' });
    }

    public openRes(n: string): void {
        window.open( n)
    }
}