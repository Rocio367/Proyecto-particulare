import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-general',
  templateUrl: './modal-general.component.html',
  styleUrls: ['./modal-general.component.scss']
})
export class ModalGeneralComponent implements OnInit {
  html:string;
  title:string;
  constructor(    @Inject(MAT_DIALOG_DATA) public data: {html:string;title:string},
  ) { 
    this.html=data.html;
    this.title=data.title;
  }

  ngOnInit(): void {
    document.getElementById('html').innerHTML=this.html;

  }

}
