import { Documento } from "./documento";

export interface Modelo {
    id?: number,
    nombre: string,
    institucion: string,
    carrera: string,
    materia: {
        id: number,
        nombre: string
    },
    nivel: {
        id: number,
        descripcion: string,
        tipo: string
    },
    archivos: Documento[],
    fecha?: Date,
    estado?: string
}