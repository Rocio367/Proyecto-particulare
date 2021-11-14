import { DetalleClase } from './../../../../shared/models/detalleClase';
import { DatosAcademicos} from './../../../../shared/models/datosAcademicos';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, PatternValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Clase } from 'src/app/shared/models/clase';
import { Patters } from 'src/app/shared/models/patters';
import { DatosAcademicosService } from 'src/app/core/services/datosAcademicos/datosAcademicos.service';
import { ClaseService } from 'src/app/core/services/clase/clase.service';


@Component({
  selector: 'app-perfil-particular',
  templateUrl: './perfil-particular.component.html',
  styleUrls: ['./perfil-particular.component.scss']
})
export class PerfilParticularComponent implements OnInit {
  
  datosAcademicos:DatosAcademicos[]= [];
  clases: Clase[]= [];
  open=false;
  openTipo='';
   formDatos = this.form.group({
    titulo: ['', [Validators.required]],
    desde: ['',[Validators.required]],
    hasta: ['',[Validators.required]],
    documento: [''],

  });
  documento = "";

  constructor(private router:Router,private form: FormBuilder,public snackBar: MatSnackBar,
    private datosAcademicosService: DatosAcademicosService,private claseService: ClaseService ) { }
  uploadedFiles: any[] = [];

  ngOnInit(): void {
    this.formDatos.controls['documento'].valueChanges.subscribe(
      archivo => {
        const reader = new FileReader();
        reader.readAsDataURL(archivo)
        reader.onload = () => {
          this.documento = reader.result as string;
        }
      }
    );      
   
    this.datosAcademicosService.buscarPorIdProfesor(2).subscribe( 
      (datosAcademicos) => {
        this.datosAcademicos = datosAcademicos;
    },
    (error) => {
      console.error(error);
    }
    );


    this.claseService.obtenerClasesPorParticular(2).subscribe( 
      (clases) => {
        this.clases = clases;
    },
    (error) => {
      console.error(error);
    }
    );
  
    }
   
  crear(){
   this.open=true;
   this.openTipo='creado'
  }

  confirmar(){
    this.open=true;
    this.openTipo;
    if(this.formDatos.valid) {
      let datosAcademicos: DatosAcademicos;

      datosAcademicos = {
        id: 2,
        idProfesor: 2,
        titulo: this.formDatos.controls["titulo"].value,
        fechaInicio:  this.formDatos.controls["desde"].value,
        fechaFin:  this.formDatos.controls["hasta"].value,
        documento: this.documento,
      }

      this.datosAcademicosService.crearDatoAcademico(datosAcademicos)
      .subscribe(
        () => {
          this.snackBar.open('El usuario fue registrado correctamente', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
            panelClass: ['green-snackbar']
          });
          this.formDatos.reset();
          this.ngOnInit();
        },
        (error) => {
          console.error(datosAcademicos, error);
          this.snackBar.open('Error al registrar dato académico', "", {
            duration: 1500,
            horizontalPosition: "end",
            verticalPosition: "top",
          });
          this.formDatos.reset();
        });
        } else {
        console.log('Error') 
        this.formDatos.markAllAsTouched();
        this.snackBar.open('Error al registrar datos académicos, ingrese los campos correctamente.', "", {
          duration: 1500,
          horizontalPosition: "end",
          verticalPosition: "top",
        });
      }
   }

  editar(item:any){
    this.open=true;
    this.openTipo='editado'

  }
  close(){
    this.open=false;
    this.openTipo=''

  }
  eliminar(id:number){
    this.datosAcademicosService.borrarPorIdProfesor(id).subscribe( 
      () => {
        this.snackBar.open('El registro de dato acádemico fue eliminado correctamente', "", {
          duration: 1500,
          horizontalPosition: "end",
          verticalPosition: "top",
          panelClass: ['green-snackbar']
        });
        this.ngOnInit();
      },
      
    (error) => {
      console.error(error);
    }
    );
  }
  oponDoc(doc){
    window.open(doc)

  }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

}
  verDetalle(l:any){
    let id=l.id;
    this.router.navigate(['detalle-modelo-alumno', {  q: id  }])
  }
}
