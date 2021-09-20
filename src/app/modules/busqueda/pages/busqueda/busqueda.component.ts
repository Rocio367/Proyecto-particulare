import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { Resultado } from 'src/app/shared/models/resultado';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  valor:string;
  count:number;
  pages:any[];
  results:Resultado[]=[];
  numberActive:string;
  spinner=true;
  constructor(private aRouter : ActivatedRoute,private services:GeneralService) { 
   
    
  }

  ngOnInit(): void {
    this.aRouter.params.subscribe(
      (params: Params) => {
        this.valor = params.q;
        this.buscar(1)

      }
    );
  }


  cambiarPagina(page){

    this.count=0;
    this.pages=[];
    this.results=[];
    page=(page=='...')? (this.numberActive+1) : page;

   this.buscar(page)
  }

  buscar(page){
    this.spinner=true;
    this.services.buscador(this.valor,page).subscribe(data=>{
      this.count=data.data[0].count;
      this.pages=data.data[0].pages;
      this.numberActive=this.pages[0];
      data.data[0].results.forEach(element => {
        this.results.push(element)
      });
      this.spinner=false;
    })
  }
}
