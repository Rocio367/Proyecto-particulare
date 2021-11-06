import { TipoDeDemora } from "./tipo-de-demora";
import { TipoDeResolucion } from "./tipo-de-resolucion";

export interface OfertaDeResolucionResponse {
    usuario: {
        id: Number
    },
    costo: Number,
    demora: TipoDeDemora,
    tipo: TipoDeResolucion,
    estado: string
}