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

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
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
  constructor(private router:Router,private aRouter: ActivatedRoute,private form: FormBuilder, private services: GeneralService) {
    this.formDatos = this.form.group({
      materia: [''],
      ubicacion: [''],
      particular: [''],
      disponibilidad: [''],
      tipo: [''],
      nivel: [''],

    });


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


  cambiarPagina(page) {

    this.count = 0;
    this.pages = [];
    this.results = [];
    page = (page == '...') ? (this.numberActive + 1) : page;

    this.buscar(page)
  }

  buscar(page) {
    this.numberActive=page;
    this.pages.push(1);
    this.spinner = true;
    let r1 = new Resultado();
    r1.descripcion = 'descripcion 1';
    r1.particular = 'particular 1';
    r1.foto = 'default-user.png';
    r1.materia = 'Ingles basico';
    r1.nivel = 'Primario';
    r1.stars = 5;
    r1.type = 'Presencial | Online';
    r1.ubicacion = 'Moron, Buenos Aires';
    this.results.push(r1)

    let r2 = new Resultado();
    r2.descripcion = 'descripcion 2';
    r2.foto = 'default-user.png';
    r2.materia = 'Ingles';
    r2.stars = 4;
    r2.type = 'Online';
    r2.ubicacion = 'Ituzaingo, Buenos Aires';
    r2.nivel = 'Secundario';
    r2.particular = 'particular 2';
    this.results.push(r2)


    let r3 = new Resultado();
    r3.descripcion = 'descripcion 3';
    r3.foto = 'default-user.png';
    r3.materia = 'Ingles';
    r3.stars = 5;
    r3.type = 'Online';
    r3.ubicacion = 'Caballito , Buenos Aires';
    r3.particular = 'particular 3';
    r2.nivel = 'Universitario';

    this.results.push(r3)


    let r4 = new Resultado();
    r4.descripcion = 'descripcion 4';
    r4.foto = 'default-user.png';
    r4.materia = 'Ingles avanzado';
    r4.stars = 3;
    r4.type = 'Presencial | Online';
    r4.ubicacion = 'Moron , Buenos Aires';
    r4.particular = 'particular 4';
    r4.nivel = 'Universitario';
    this.results.push(r4)


    let r5 = new Resultado();
    r5.descripcion = 'descripcion 5';
    r5.foto = 'default-user.png';
    r5.materia = 'Ingles para principiantes';
    r5.stars = 3;
    r5.type = 'Online';
    r5.ubicacion = 'Castelar , Buenos Aires';
    r5.particular = 'particular 5';
    r5.nivel = 'Primario | Secundario'
    this.results.push(r5)

    let r6 = new Resultado();
    r6.descripcion = 'descripcion 6';
    r6.foto = 'default-user.png';
    r6.materia = 'Ingles';
    r6.stars = 5;
    r6.type = 'Online';
    r6.ubicacion = 'Moron , Buenos Aires';
    r6.particular = 'particular 6';
    r6.nivel = 'Secundario'
    this.results.push(r6)
    this.count = this.results.length;
    this.spinner = false;

  }
}
