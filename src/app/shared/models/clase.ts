export interface Clase {
    nombre: string
    nivel: {
        id: number,
        descripcion: string,
        tipo: string
    },
    materia: {
        id: number,
        nombre: string
    },
    modo: string
    tipo: string
    precio: number
    descripcion: string
    fecha?: Date
    estado?: string
    cupo?: number
}