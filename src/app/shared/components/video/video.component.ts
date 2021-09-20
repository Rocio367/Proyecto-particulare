import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { ConsultaRequest } from 'src/app/shared/models/consultaRequest';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() width = 100;
  @Input() linkCode: string;
  formDatos:FormGroup;
  constructor(private _sanitizer: DomSanitizer,private form:FormBuilder, private services: GeneralService) {
    this.formDatos = this.form.group({
      name: [''],
      email: ['', Validators.email],
      region: [''],
      message: [''],
    });
   }

  ngOnInit(): void {
    $("#container-video").width(this.width.toString()+'%');

  }
  consultar() {
    let datos = new ConsultaRequest();
    datos.email = this.formDatos.get('email').value;
    datos.name = this.formDatos.get('name').value;
    datos.region = this.formDatos.get('region').value;
    datos.message = this.formDatos.get('message').value;
    this.services.postConsulta(datos).then(function (response) {
      return response.json();
    }).then(res => {
      if (res.status == 1) {
        Swal.fire(
          'La consulta fue enviada con exito!',
          '',
          'success'
        )
      } else {
        Swal.fire(
          'La consulta fallo , lo sentimos',
          '',
          'error'
        )

      }
    }
    )

  }
  getVideoIframe(url) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video + '?disablekb=1');
  }

}
