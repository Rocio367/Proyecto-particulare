import { Clase } from 'src/app/shared/models/clase';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { ConsultaRequest } from 'src/app/shared/models/consultaRequest';
import { Lugar } from 'src/app/shared/models/lugar';
import { Resultado } from 'src/app/shared/models/resultado';
import Swal from 'sweetalert2';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { R } from '@angular/cdk/keycodes';
import { BusquedaService } from 'src/app/core/services/busqueda/busqueda.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  clases: Clase[] = [];
  valor: string;
  count: number;
  pages: any[]=[];
  results: Resultado[] = [];
  numberActive: string;
  spinner = true;
  formDatos: FormGroup;
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;
  lat: number;
  lng: number;
  options = {
    types: [],
    componentRestrictions: { country: 'AR' }
  };
  minDate= new Date;
  selectedMateria:any;
  selectedType:any;
  selectedNiveles:any;
  selectedValues: string[] = [];
  tipos:any[]=[{code:'1',name:'Online'},{code:'2',name:'Me puedo acercar'},{code:'3',name:'En mi casa'}]
  materias:any[]=[{code:'1',name:'materia 1'},{code:'2',name:'Materia 2'}]
  niveles:any[]=[{code:'1',name:'Primaria'},{code:'2',name:'Secundaria'},{code:'2',name:'Universitario / Terciario'}]
  constructor(private router:Router,private aRouter: ActivatedRoute,
    private form: FormBuilder,
    private services: GeneralService,
    private serviceBusqueda: BusquedaService) {

    const date = new Date();
    this.minDate= new Date(date.getTime());

  }
 

  filtrar() {

  }

  limpiar() {
   
  }
  onSelectionChange(l){  
    let id=(new String((l.value[0].id)))
    this.router.navigate(['detalle-clase', {  q: id  }])
 }
  getCoordenadas(lugar: Lugar): void {
    this.formDatos.setValue({ 'lat': lugar.lat, 'lng': lugar.lng });

  }

  public handleAddressChange(address: Address) {
    console.log(address)
    if (address.geometry != undefined) {
      this.formDatos.controls['ubicacion'].setValue(address.formatted_address);
      this.lat = address.geometry.location.lat();
      this.lng = address.geometry.location.lng();

    } 


  }
  ngOnInit(): void {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.valor = params.q;
        this.buscar(1)

      }
    );
  }


  
  buscar(page) {
    this.serviceBusqueda.obtenerBusqueda(this.valor).subscribe( 
      (clases) => {
        this.clases = clases;
    },
    (error) => {
      console.error(error);
    }
    );
 
   }

  ver(l){
    this.router.navigate(['detalle-clase', {  q: l.id  }])

  }
}