import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/core/services/mensajes/mensajes.service';
import { Mensaje } from 'src/app/shared/models/mensaje';
import { ModalResponderComponent } from '../modal-responder/modal-responder.component';

@Component({
  selector: 'app-mensaje-detalle',
  templateUrl: './mensaje-detalle.component.html',
  styleUrls: ['./mensaje-detalle.component.scss']
})
export class MensajeDetalleComponent implements OnInit {
  @Input() mensaje: Mensaje;
  @Input() responder = true;
  constructor(public dialog: MatDialog,  private _snackBar: MatSnackBar,private router: Router,private mensajeServices: MensajesService) { 
    
  }

  ngOnInit(): void {
   
    document.getElementById('contenido').innerHTML=this.mensaje.contenido;
  }

  verRespuestas(){
    this.mensajeServices.getDetalle(this.mensaje.id).subscribe(res=>{
      console.log(res)
    
    })
  }
  respuesta() {
    this.router.navigate(['nuevo-mensaje',{q:this.mensaje.id}])
  }

}
