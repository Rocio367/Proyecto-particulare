import { TipoDeDemora } from "./tipo-de-demora";
import { TipoDeResolucion } from "./tipo-de-resolucion";

export interface OfertaDeResolucion {
    costo: Number,
    tipoResolucion: TipoDeResolucion,
    tipoDeDemora: TipoDeDemora,
    idUsuario: Number,
    disponibilidad:any[];
}