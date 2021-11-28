import { Documento } from "./documento";

export interface Particular {
    id: number,
    experiencia: string,
    video:string,
    localidad:string,
    idUsuario?:number,
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