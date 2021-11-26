import { Component, Input, OnInit } from "@angular/core";
import * as JSZip from "jszip";
import { ModelosService } from "src/app/core/services/modelos/modelos.service";
import { ServicioDeResolucion } from "src/app/core/services/resolucion/resolucion.service";
import { Documento } from "src/app/shared/models/documento";
import { OfertaDeResolucionResponse } from "src/app/shared/models/oferta-resolucion-response";
import { Resolucion } from "src/app/shared/models/resolucion";
import { saveAs } from 'file-saver';

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
    public archivos: Documento[];

    constructor(private servicioDeModelos: ModelosService,
                private servicioDeResolucion: ServicioDeResolucion) {}

    public ngOnInit() {
        this.servicioDeModelos.obtenerResolucionPorModelo(this.ofertaDeResolucion.modelo.id)
            .subscribe((resoluciones) => {
                this.resolucion = resoluciones.find((r) => r.usuario.id == this.ofertaDeResolucion.usuario.id);
                this.estaCargando = this.resolucion != undefined;
                if (this.resolucion) {
                    this.servicioDeResolucion.obtenerArchivosDeUnaResolucion(this.resolucion)
                        .subscribe(
                            (archivos) => {
                                this.archivos = archivos;
                                this.estaCargando = false;
                            },
                            (error) => {
                                console.error(error);
                                this.estaCargando = false;
                            }
                        )
                }
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

    public descargar(): void {
        var zip = new JSZip();
        this.archivos.forEach((archivo: Documento, indice: number) => {
            var extension = archivo.extension.split("/")[1];
            zip.file("hoja" + (indice + 1) + "." + extension, archivo.datos, {base64: true});
        });
        zip.generateAsync({type:"blob"})
            .then(function (content) {
                saveAs(content, "resolucion.zip");
            });
    }
}