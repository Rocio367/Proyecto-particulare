import { Documento } from "./documento";

export interface Modelo {
    id?: number,
    nombre: string,
    institucion: {
        id: number,
        nombre: string
    },
    carrera: {
        id: number,
        nombre: string
    },
    publico: boolean,
    materia: {
        id: number,
        nombre: string
    },
    nivel: {
        id: number,
        descripcion: string,
        tipo: string
    },
    usuario:number;
    archivos: Documento[],
    fecha?: Date,
    estado?: string
    
}