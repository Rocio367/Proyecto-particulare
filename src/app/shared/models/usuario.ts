import { Documento } from "./documento";

export interface Usuario{
    nombre: string;
    apellido: string;
    documento: number;
    email: string;
    contrasenia: string;
    telefono: number;
    fechaNacimiento: String;
    fotoPerfil: Documento[];
    rol:string;
    id:number;
}