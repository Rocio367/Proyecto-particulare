import { Documento } from "./documento";

export interface DatosAcademicos {
    id: number;
    idProfesor: number;
    titulo: string;
    fechaInicio: Date;
    fechaFin: Date;
    archivos: Documento[];
}