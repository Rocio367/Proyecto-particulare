import { ExecOptionsWithStringEncoding } from "child_process";
import { TipoDeDemora } from "./tipo-de-demora";
import { TipoDeResolucion } from "./tipo-de-resolucion";

export interface OfertaDeResolucionResponse {
    id: Number,
    usuario: {
        nombre?:string,
        apellido?:string;
        id: Number
    },
    modelo: {
        id: Number
    },
    costo: Number,
    demora: TipoDeDemora,
    tipo: TipoDeResolucion,
    estado: string,
    foto?:string;
    valoracion?:number;
}