export interface Usuario{
    nombre: string;
    apellido: string;
    documento: number;
    email: string;
    contrasenia: string;
    telefono: number;
    fechaNacimiento: String;
    foto: {
        nombre: string,
        extension: string,
        tamanio: Number,
        datos: string
    },
}