import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { ParticularService } from 'src/app/core/services/particular/particular.service';
import { UsuariosService } from 'src/app/core/services/usuarios/usuarios.service';
import { MensajePost } from 'src/app/shared/models/mensajePost';

@Component({
  selector: 'app-modal-responder',
  templateUrl: './modal-responder.component.html',
  styleUrls: ['./modal-responder.component.scss']
})
export class ModalResponderComponent implements OnInit {
  text: string;
  formDatos = this.form.group({
    destinatario: ['', Validators.required],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required],

  });
  usuarios: any[] = [];
  idMensaje: number;
  idUser=localStorage.getItem('idUser');
  constructor(private router:Router,private servicesParticular: ParticularService, private form: FormBuilder, private _snackBar: MatSnackBar, private mensajeServices: MensajesService, private UsuarioServices: UsuariosService, private aRouter: ActivatedRoute) {
    this.servicesParticular.obtenerTodos().subscribe(res => {
      console.log(this.idUser)
      res.forEach(element => {
        if(element.usuario.id != this.idUser){
          console.log({ name: element.usuario.nombre + ' , ' + element.usuario.apellido, code: element.usuario.id })
          this.usuarios.push({ name: element.usuario.nombre + ' , ' + element.usuario.apellido, code: element.usuario.id })
          
        }
      });
      this.UsuarioServices.obtenerTodos().subscribe(res2 => {
        res2.forEach(element => {
          if(element.usuario.id != this.idUser){
            console.log({ name: element.usuario.nombre + ' , ' + element.usuario.apellido, code: element.usuario.id })

            this.usuarios.push({ name: element.usuario.nombre + ' , ' + element.usuario.apellido, code: element.usuario.id })
          }
        });
      })
    })

  }

  ngOnInit(): void {
    this.aRouter.params.subscribe(
      (params: Params) => {
        if (params.q) {
          this.idMensaje = Number(params.q);

          this.mensajeServices.getMensaje(this.idMensaje).subscribe(res => {
            this.formDatos.controls['asunto'].setValue(res.asunto)
            this.formDatos.controls['destinatario'].setValue({ name: res.emisor.nombre + ' , ' + res.emisor.apellido, code: res.emisor.id })
            this.formDatos.get('asunto').disable();
            this.formDatos.get('destinatario').disable();

          })
        }

        if (params.p) {
          this.servicesParticular.buscarPorIdProfesor(params.p).subscribe(res=>{
            console.log(res)
            console.log({ name: res.usuario.nombre + ' , ' + res.usuario.apellido, code: res.usuario.id })
            this.formDatos.controls['asunto'].setValue('Contacto')
            this.formDatos.controls['destinatario'].setValue({ name: res.usuario.nombre + ' , ' + res.usuario.apellido, code: res.usuario.id })
            this.formDatos.get('destinatario').disable();

          })
         
        }
      }
    );
  }
  enviar() {
    if (this.formDatos.valid) {
      let mensaje = new MensajePost();
      mensaje.contenido = this.formDatos.get('mensaje').value;
      mensaje.asunto = this.formDatos.get('asunto').value;
      mensaje.receptor = (this.formDatos.get('destinatario').value).code;
      //deberia ser el id del usuario actual
      mensaje.emisor = Number(this.idUser);

      mensaje.idMensaje = this.idMensaje;
      console.log(mensaje)

       this.mensajeServices.crearMensaje(mensaje).subscribe(res => {
         this._snackBar.open("El mensaje fue enviado correctamente", "", {
           duration: 1500,
           horizontalPosition: "end",
           verticalPosition: "top",
           panelClass: ['green-snackbar']
         });

         this.router.navigate(['enviados'])
       })
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }
  }
}
