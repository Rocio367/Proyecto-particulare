import { Documento } from "./documento";

export interface Alumno {
    materiasInteres: string;
    nivelAcademico: string;
    idUser?: number;
    usuario: {
        nombre: string;
        apellido: string;
        documento: number;
        email: string;
        contrasenia: string;
        telefono: number;
        fechaNacimiento: String;
        fotoPerfil: Documento[];
    },

}