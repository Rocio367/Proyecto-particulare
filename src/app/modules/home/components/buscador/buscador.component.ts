import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  buscarText: string;


  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  results: string[];

  search(event) {
    console.log(event)
     this.results=this.results.filter(d=>d.includes(event))
  }
  buscar() {
    this.router.navigate(['busqueda', { q: this.buscarText }])
  }

}
