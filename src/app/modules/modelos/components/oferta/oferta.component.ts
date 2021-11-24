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
        console.log(this.ofertaDeResolucion);
        return this.ofertaDeResolucion.estado == 'PENDIENTE_DE_RESPUESTA'
    }
}