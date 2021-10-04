import { Component, Input, OnInit } from '@angular/core';
import { Lugar } from 'src/app/shared/models/lugar';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

 
  @Input() lat:number;
  @Input() lng:number;
  zoom:number;
  mapTypeId:string;
  lugar:Lugar;
 
 
  constructor() {
 
   }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(data =>{
      this.lat=data.coords.latitude;
      this.lng=data.coords.longitude;
    })
    this.zoom=16;
    this.mapTypeId='terrain';
  }



}
