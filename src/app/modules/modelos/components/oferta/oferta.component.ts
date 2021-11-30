import { Component, Input } from "@angular/core";
import { OfertaDeResolucionResponse } from "src/app/shared/models/oferta-resolucion-response";

@Component({
    selector: 'app-oferta',
    templateUrl: './oferta.component.html'
})
export class Oferta {
    @Input()
    ofertaDeResolucion: OfertaDeResolucionResponse;

    public estaPendienteDeSerAceptada(): boolean {
        return this.tieneEstadoIgual('PENDIENTE_DE_RESPUESTA');
    }

    public estaAceptada(): boolean {
        return this.tieneEstadoIgual('ACEPTADA');
    }

    private tieneEstadoIgual(estado: string): boolean {
        return this.ofertaDeResolucion.estado == estado;
    }
}