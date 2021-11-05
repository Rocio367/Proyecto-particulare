export interface Alumno {
    materiasInteres: string;
    nivelAcademico: string;
    usuario: {
        nombre: string;
        apellido: string;
        documento: number;
        email: string;
        contrasenia: string;
        telefono: number;
        fechaNacimiento: String;
        fotoPerfil: string;
    },
}