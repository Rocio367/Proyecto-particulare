import { Documento } from "./documento";

export interface Modelo {
    institucion: string,
    carrera: string,
    materia: string,
    nivel: string,
    archivos: Documento[]
}