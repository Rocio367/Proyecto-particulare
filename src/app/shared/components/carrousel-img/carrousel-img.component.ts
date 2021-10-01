import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalGalleryComponent } from 'src/app/shared/components/modal-gallery/modal-gallery.component';
import { imgGallery } from 'src/app/shared/models/imgGallery';

@Component({
  selector: 'app-carrousel-img',
  templateUrl: './carrousel-img.component.html',
  styleUrls: ['./carrousel-img.component.scss']
})
export class CarrouselImgComponent implements OnInit {

  datos: any;
  carousel = false;
  archivo: any;
  @Input() title: string;
  gallery: imgGallery[]=[];
  @Input() data:any;
  @Input() background='#003567';
  styleTitle='blanco';
  constructor( public dialog: MatDialog) {

  }
  ngOnInit(): void {
   
  //  if (this.data) {
      var i = 0;

  //    this.data.forEach(element => {
        let img = new imgGallery();
        img.id = i.toString();
        img.path = 'default-placeholder.png';
        img.position = i;
        i++;
        this.gallery.push(img)

        let img2 = new imgGallery();
        img2.id = i.toString();
        img2.path = 'default-placeholder.png';
        img2.position = i;
        i++;
        this.gallery.push(img2)

        let img3 = new imgGallery();
        img3.id = i.toString();
        img3.path = 'default-placeholder.png';
        img3.position = i;
        i++;
        this.gallery.push(img3)

        let img4 = new imgGallery();
        img4.id = i.toString();
        img4.path = 'default-placeholder.png';
        img4.position = i;
        i++;
        this.gallery.push(img4)

        let img5 = new imgGallery();
        img5.id = i.toString();
        img5.path = 'default-placeholder.png';
        img5.position = i;
        i++;
        this.gallery.push(img5)
   //   });
 //   }
  }
  openModal(id: number): void {
    this.dialog.open(ModalGalleryComponent, { panelClass: 'custom-dialog-container', data: { titulo: this.title, gallery: this.gallery, id: id } });
  }


}
