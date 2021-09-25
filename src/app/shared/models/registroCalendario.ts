export class RegistroCalendar{
    name:string;
    value:number;
    indexWeek:number;
    available:boolean;
    available_hours:any[]=[];
    reserved_hours:any[]=[];
    date:Date;
}