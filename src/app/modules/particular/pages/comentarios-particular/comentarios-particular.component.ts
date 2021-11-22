import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  comentario: string
  stars: number;
}

@Component({
  selector: 'app-comentarios-particular',
  templateUrl: './comentarios-particular.component.html',
  styleUrls: ['./comentarios-particular.component.scss']
})
export class ComentariosParticularComponent implements OnInit {

  constructor() { }

  elements: Section[] = [
    {
    name: 'Alumno 1',comentario:'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia eros, magnis a augue erat ac dis sagittis faucibus, in tempor malesuada lobortis integer purus metus nunc..',stars:1
    },
    {name: 'Alumno 2', comentario:'Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia eros, magnis a augue erat ac dis sagittis faucibus, in tempor malesuada lobortis integer purus metus nunc.',stars:5},
  ];

  ngOnInit(): void {
  }

}
