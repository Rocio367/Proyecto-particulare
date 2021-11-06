import { Documento } from "./documento";

export interface SolucionDeModeloRequest {
    idModelo: Number,
    comentarioAdicional?: string,
    archivos: Documento[],
    idUsuario: Number
}