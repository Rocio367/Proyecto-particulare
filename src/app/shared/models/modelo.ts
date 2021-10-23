import { Documento } from "./documento";

export interface Modelo {
    id?: number,
    institucion: string,
    carrera: string,
    materia: string,
    nivel: string,
    archivos: Documento[],
    fecha?: Date
    estado?: string
}