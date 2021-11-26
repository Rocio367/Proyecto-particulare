export interface Resolucion {
    id: Number,
    usuario: {
        id: Number,
        nombre: string,
        apellido: string
    },
    modelo: {
        id: Number
    },
    comentario: string
}