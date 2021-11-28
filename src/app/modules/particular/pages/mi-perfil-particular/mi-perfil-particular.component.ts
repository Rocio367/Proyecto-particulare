import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ClaseService } from 'src/app/core/services/clase/clase.service';
import { DatosAcademicosService } from 'src/app/core/services/datosAcademicos/datosAcademicos.service';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { Clase } from 'src/app/shared/models/clase';
import { DatosAcademicos } from 'src/app/shared/models/datosAcademicos';
import { Particular } from 'src/app/shared/models/particular';
import { Documento } from 'src/app/shared/models/documento';


@Component({
  selector: 'app-mi-perfil-particular',
  templateUrl: './mi-perfil-particular.component.html',
  styleUrls: ['./mi-perfil-particular.component.scss']
})
export class MiPerfilParticularComponent implements OnInit {
  info:string;
  particular: Particular;
  id: number = Number(localStorage.getItem('idUser'));
  minDate=new Date();
  datosAcademicos:DatosAcademicos[]= [];
  clases: Clase[]= [];
  open=false;
  openTipo='';
   formDatos = this.form.group({
    titulo: ['', [Validators.required]],
    desde: ['',[Validators.required]],
    hasta: ['',[Validators.required]],
  });

  constructor(private aRouter: ActivatedRoute,private router:Router,private form: FormBuilder,public snackBar: MatSnackBar,
    private datosAcademicosService: DatosAcademicosService,private claseService: ClaseService,
    private particularService: ParticularService ) {
      this.aRouter.params.subscribe(
        (params: Params) => {
          if(params.q){
            this.id = Number(params.q);
          }
        }
      );
     }
  uploadedFiles: any[] = [];

  ngOnInit(): void {
    this.particularService.buscarPorIdProfesor(this.id).subscribe( 
      (particular) => {
        this.particular = particular;
        this.datosAcademicosService.buscarPorIdProfesor(particular.id).subscribe( 
          (datosAcademicos) => {
            this.datosAcademicos = datosAcademicos;
            console.error(particular.id);

            this.datosAcademicos.forEach(dato => {
              this.datosAcademicosService.obtenerArchivoDatoAcademico(dato.id).subscribe(
                (documentos) => {
                  dato.archivos = documentos;
                },
                (error) => {
                  console.error(error);
                }
              );
            });
        },
        (error) => {
          console.error(error);
        }
        );

        this.claseService.obtenerClasesPorParticular(particular.usuario.id).subscribe( 
          (clases) => {
            this.clases = clases;
        },
        (error) => {
          console.error(error);
        }
        );

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
    let datosAcademicos: DatosAcademicos;

    if(this.formDatos.valid) {
      this.cargarArchivos(this.uploadedFiles)
      .then((archivos) => {
        datosAcademicos = {
          id: 2,
          idProfesor: this.particular.id,
          titulo: this.formDatos.controls["titulo"].value,
          fechaInicio:  this.formDatos.controls["desde"].value,
          fechaFin:  this.formDatos.controls["hasta"].value,
          archivos:archivos,
        }
        console.log(datosAcademicos) 
        this.datosAcademicosService.crearDatoAcademico(datosAcademicos)
        .subscribe(
          () => {
            this.snackBar.open('El dato academico fue registrado correctamente', "", {
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

  cargarArchivos = async (archivos: any[]): Promise<Documento[]> => {
    return await Promise.all(archivos.map(async (datosAcademicos): Promise<Documento> => {
      return {
        nombre: datosAcademicos.name,
        tamanio: datosAcademicos.size,
        extension: datosAcademicos.type,
        datos: await this.cargarArchivo(datosAcademicos)
      }
    }));
  }

  cargarArchivo = async (modelo: any): Promise<string> => {
    let base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(modelo);
    });
    return base64 as string;
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
    this.info = this.obtenerImagenEnBase64(doc);
    window.open(this.info)
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

}
  verDetalle(l:any){
    let id=l.id;
    this.router.navigate(['detalle-clase', {  q: id  }])
  }

  obtenerRangoDeEdad() :string {
    var fechaActual = new Date().getFullYear();
    var fechaLimiteMaxima = fechaActual;
    var fechaLimiteMinima = fechaActual - 50;
    return fechaLimiteMinima + ":" + fechaLimiteMaxima;
  }

  borrarDocumento(event) {
    this.uploadedFiles.forEach((modelo, indice) => {
      if (modelo == event.file) {
        this.uploadedFiles.splice(indice,1);
      }
    });
    console.log("Se elimino un documento");
  }

  cancelarSeleccionDeDocumentos() {
    this.uploadedFiles.length = 0;
    console.log("Se cancelo la seleccion de archivos");
  }

  seleccionarDocumento(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    console.log("Se selecciono uno o mas documentos");
  }


  cambiarMinDate(){
    this.minDate =  this.formDatos.controls["desde"].value;
  }
  
  obtenerImagenEnBase64(documento: Documento): string {
    return `data:${documento.extension};base64,${documento.datos}`;
  }
  
}



