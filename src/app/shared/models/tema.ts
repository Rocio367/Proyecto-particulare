export class Tema{
    titulo:string;
    descripcion:string;
    seguidores:number;
    respuesta:Respuestas[]=[];
    like:boolean;
    fecha:Date;
    avatar:string;
    user:string;
}
export class Respuestas{
   text:string;
   respuestas: Respuestas[]=[];
   ver=false;
   aResponder=false;
   avatar:string;
   user:string;
}