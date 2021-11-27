import { TipoDeDemora } from "./tipo-de-demora";
import { TipoDeResolucion } from "./tipo-de-resolucion";

export interface OfertaDeResolucionResponse {
    id: Number,
    usuario: {
        id: Number
    },
    modelo: {
        id: Number
    },
    costo: Number,
    demora: TipoDeDemora,
    tipo: TipoDeResolucion,
    estado: string
}