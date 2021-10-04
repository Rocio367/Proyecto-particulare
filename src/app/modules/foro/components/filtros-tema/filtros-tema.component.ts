import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-filtros-tema',
  templateUrl: './filtros-tema.component.html',
  styleUrls: ['./filtros-tema.component.scss']
})
export class FiltrosTemaComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  classCtrl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = [];
  allOptions: string[] = [];
  allComplete: boolean = false;
  filters:any[]=[{nombre:'Creador por mi'},{nombre:'Ultimas agregados'},{nombre:'Mas viejos'},{nombre:'Mas populares'},]
  @ViewChild('classInput') classInput: ElementRef<HTMLInputElement>;

  constructor(private router:Router) {
    this.filteredOptions = this.classCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allOptions.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.options.push(value);
    }

    // Clear the input value
    event.value=null;

    this.classCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.options.indexOf(fruit);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.options.push(event.option.viewValue);
    this.classInput.nativeElement.value = '';
    this.classCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allOptions.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
  ngOnInit(): void {
  }

  buscar(){
   // this.router.navigate(['busqueda/'+ this.options])
  }
  setAll(completed: boolean) {
  }


}
