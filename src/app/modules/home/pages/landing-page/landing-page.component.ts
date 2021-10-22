import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  materias: any[] = ['Física', 'Química', 'Sociologia', 'Historia de la Psicología'];
  filteredMateria: any[] = [];
  formDatos = this.form.group({
    materia: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],

  });


  constructor(private form: FormBuilder,) { }

  ngOnInit(): void {
  }
  enviar() {

  }
  filterMateria(event) {
    this.filteredMateria = this.materias.filter(d => d.toLowerCase().includes(event.query.toLowerCase()))
  }
}
