import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-clase-particular',
  templateUrl: './editar-clase-particular.component.html',
  styleUrls: ['./editar-clase-particular.component.scss']
})
export class EditarClaseParticularComponent implements OnInit {

  clase=[{name:'Online',code:'1'},{name:'Presencial',code:'2'}]
  tipo=[{name:'Individual',code:'1'},{name:'Grupal',code:'2'},{name:'Mixto',code:'3'}]
  niveles: any[] = [{ code: '1', name: 'Primaria' }, { code: '2', name: 'Secundaria' }, { code: '3', name: 'Universitario / Terciario' }]

  materias: any[] =[];
  materiasPrimariaSecundaria: any[] = [{code:'1',name:'Física'},{code:'2',name: 'Química'}, {code:'3',name:'Sociologia'},{code:'4',name: 'Historia de la Psicología'}];
  materiasUnivesidadTerciarios: any[] =  [{code:'1',name:'Física'},{code:'2',name: 'Química'}, {code:'3',name:'Sociologia'},{code:'4',name: 'Historia de la Psicología'}];
  filteredMateria: any[] = [];
  formDatos = this.form.group({
    fotoPerfil: [''],
    materia: ['', Validators.required],
    nivel: ['', Validators.required],
    onlineTreFalse: ['', [Validators.email, Validators.required]],
    tipo: ['', Validators.required],
    precio: ['', Validators.required],
    descripcion: ['', Validators.required],
  });


  constructor(private form: FormBuilder, private router: Router ) { 
    this.materias=this.materiasPrimariaSecundaria;
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log(this.formDatos.get('nivel').value)
    var i = this.formDatos.get('nivel').value;
    if (i.code == '1' || i.code == '2') {
      this.materias = this.materiasPrimariaSecundaria;
    } else if (i.code == 3) {
      this.materias = this.materiasUnivesidadTerciarios;
    }
  }
  registrarClase(){
    if(this.formDatos.valid) {
      this.router.navigate(['/detalle-clase']);
      return true;
    } else {
      console.log(this.formDatos);
      this.formDatos.markAllAsTouched();
    }
    
  }

}