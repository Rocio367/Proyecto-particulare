import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  materias: any[] = ['Física', 'Química', 'Sociologia', 'Historia de la Psicología'];
  filteredMateria: any[] = [];
  tipo=1;
  formDatos = this.form.group({
    materia: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],

  });


  constructor(private form: FormBuilder,private route:ActivatedRoute) {
    this.route
    .params
    .subscribe(params => {
      if(params.q){
        this.tipo = params.q

      }
    });
   }

  ngOnInit(): void {
    window.addEventListener('load', function()  {
      let elements = document.getElementsByClassName('scroll-content');      
        for(var i = 0; i < elements.length; i++) {
          let element = elements[i];
            element.classList.add('visible');
        }
    });
    window.addEventListener('scroll', function()  {
      let elements = document.getElementsByClassName('scroll-content');
      let element = document.getElementById('card');
      element.classList.add('visible');

      let screenSize = window.innerHeight;
      
        for(var i = 0; i < elements.length; i++) {
          let element = elements[i];
    
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
          } else {
            element.classList.remove('visible');
          }
        }
    });
  }
  enviar() {

  }
  filterMateria(event) {
    this.filteredMateria = this.materias.filter(d => d.toLowerCase().includes(event.query.toLowerCase()))
  }
}
