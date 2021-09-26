export class Tema{
    titulo:string;
    descripcion:string;
    seguidores:number;
    respuesta:Respuestas[]=[];
    like:boolean;
    fecha:Date;
}
export class Respuestas{
   text:string;
   respuestas: Respuestas[]=[];
   ver=false;
   aResponder=false;
}