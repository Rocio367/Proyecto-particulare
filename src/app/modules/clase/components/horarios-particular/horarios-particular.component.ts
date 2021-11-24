import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ClaseService } from 'src/app/core/services/clase/clase.service';

@Component({
  selector: 'app-horarios-particular',
  templateUrl: './horarios-particular.component.html',
  styleUrls: ['./horarios-particular.component.scss']
})
export class HorariosParticularComponent implements OnInit {
  clases: any[] = [];
  idClase:number;
  constructor(private router:Router,public config: DynamicDialogConfig, private servicesClases: ClaseService) {
    this.idClase=Number(this.config.data.id);
    this.servicesClases.obtenerDisponibilidad(this.config.data.id).subscribe(res => {
      res.forEach(element => {
          if(element.estado=='NODISPONIBLE'){
            this.clases.push(Element)
          }
      });
    })
  }

  ngOnInit(): void {
  }
  iniciar(id){
       this.router.navigate(['reunion', { q: id }])

  }
}
