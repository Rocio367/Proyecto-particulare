import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryImage } from '../../models/galeryImage';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss']
})
export class ModalGalleryComponent implements OnInit {

  public image:any;
  gallery:any[] = [];
  titulo:string;
  descripcion:string;
  id:number;
  spinner=false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {titulo:string,gallery:GalleryImage[];id:number},
    private ref:ChangeDetectorRef,
  ) {
    this.titulo=data.titulo;
    this.gallery=data.gallery;
    this.id=data.id;
  }

  ngOnInit():void {
    this.getImageSelected();

  }

  getImageSelected():void {
    this.image=this.gallery[this.id];

  }

  changeImg(move:number):void {
    const position = this.image.position + move;
    let nuevaImg =this.gallery[position]
    if(nuevaImg){
      this.image=nuevaImg;
    }
  }

  ngOnDestroy():void {
    this.gallery=[];
    this.image=null;
  }

}


