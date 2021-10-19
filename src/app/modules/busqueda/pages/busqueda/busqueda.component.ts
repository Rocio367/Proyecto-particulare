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
    this.numberActive=page;
    this.pages.push(1);
    this.spinner = true;
    let r1 = new Resultado();
    r1.descripcion = 'Actualmente soy docente y ejerzo hace 30 años hasta la fecha. Acompaño a mis alumnos para rendir exámenes internacionales...';
    r1.foto = 'https://d131oejryywhj7.cloudfront.net/p/api/usuario/dup/4NufvtIc2Ug4tC42XsKSTrpZrWiwzKWQ0.jpg/120x120cut/?s=l';
    r1.materia = 'Clases de inglés para apoyo escolar y niveles avanzados';
    r1.stars = 5;
    r1.type = 'Presencial | Online';
    r1.ubicacion = 'Moron, Buenos Aires';
    this.results.push(r1)

    let r2 = new Resultado();
    r2.materia='Estudiante de traductorado de inglés da clases particulares para todos los niveles'
    r2.descripcion = 'Inglés para adultos y adolescentes, ingresos a la facultad y preparación para exámenes internacionales. Si tu meta ...';
    r2.foto = 'https://d131oejryywhj7.cloudfront.net/p/api/usuario/dup/lLnYgleF2Uhi7ecOlfqSSJEeygjUvI5P0.jpg/120x120cut/?s=l';
    r2.stars = 4;
    r2.type = 'Online';
    r2.ubicacion = 'Ituzaingo, Buenos Aires';
    this.results.push(r2)


    let r3 = new Resultado();
    r3.descripcion = 'Clases de apoyo en inglés, explicación de gramática, comprensión de texto, etc. Ejercitaciónes y ...';
    r3.foto = 'https://d131oejryywhj7.cloudfront.net/p/api/usuario/dup/a7hj0EqO2UivQLGyeRw1SJvM5HErd6bo0.jpg/120x120cut/?s=l';
    r3.materia = 'Inglés';
    r3.stars = 5;
    r3.type = 'Online';
    r3.ubicacion = 'Caballito , Buenos Aires';

    this.results.push(r3)


    let r4 = new Resultado();
    r4.descripcion = 'Academia online con profes Certificados en Cambridge, clases adaptadas a tus necesidades. ';
    r4.foto = 'https://tcl.azureedge.net/p/images_ar/fotos/l/800676.jpg/120x120cut/?v=637667783836313280';
    r4.materia = 'Inglés avanzado';
    r4.stars = 3;
    r4.type = 'Presencial | Online';
    r4.ubicacion = 'Moron , Buenos Aires';
    this.results.push(r4)


    let r5 = new Resultado();
    r5.descripcion = 'Soy profesor de Inglés desde hace 8 años, tanto en escuelas como de manera particular. Trabajo con niños, adolescentes...';
    r5.foto = 'https://ta.azureedge.net/p/images/usuarios/l/xhOzzI861kg4PEA4IxvJRKBA85d67Aj10.jpg/120x120cut/ 1x, https://ta.azureedge.net/p/images/usuarios/l/xhOzzI861kg4PEA4IxvJRKBA85d67Aj10.jpg/190x190cut/ 2x';
    r5.materia = 'Inglés para principiantes';
    r5.stars = 3;
    r5.type = 'Online';
    r5.ubicacion = 'Castelar , Buenos Aires';
    this.results.push(r5)

    let r6 = new Resultado();
    r6.descripcion = 'Clases particulares, para una o más personas, en domicilio o lugar a convenir. O bien vía Zoom. Las clases pueden ser...';
    r6.foto = 'https://ta.azureedge.net/p/images/usuarios/l/ThJ7zW0y2Eg39BdOIVNZQJuPZK5oAye00.jpg/120x120cut/ 1x, https://ta.azureedge.net/p/images/usuarios/l/ThJ7zW0y2Eg39BdOIVNZQJuPZK5oAye00.jpg/190x190cut/ 2x';
    r6.materia = 'Inglés';
    r6.stars = 5;
    r6.type = 'Online';
    r6.ubicacion = 'Moron , Buenos Aires';
    this.results.push(r6)
    this.count = this.results.length;
    this.spinner = false;

  }
  ver(l){
    this.router.navigate(['detalle-clase', {  q: l.id  }])

  }
}
