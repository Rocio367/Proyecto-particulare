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
    metodo: string
    precio: number
    descripcion: string
    fecha?: Date
    estado?: string
    cupo?: number
    puntuacion?: number,
    id_profesor: number,
    disponibilidad:Date[];
    profesor?: {
        id?: number,
        usuario?: {
            nombre?: string,
            apellido?: string,
            id?:number
        }
    }

    foto?:string;

}