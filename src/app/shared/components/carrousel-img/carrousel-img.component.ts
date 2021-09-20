import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/core/services/general/general.service';
import { ModalGalleryComponent } from 'src/app/shared/components/modal-gallery/modal-gallery.component';
import { imgGallery } from 'src/app/shared/models/imgGallery';
import { environment } from 'src/environments/environment';

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
    if (this.background=='#ffffff') {
      this.styleTitle = "azul";
    }
    if (this.data) {
      var i = 0;

      this.data.forEach(element => {
        let img = new imgGallery();
        img.id = element.id;
        img.path = element.path;
        img.position = i;
        i++;
        this.gallery.push(img)
      });
    }
  }
  openModal(id: number): void {
    this.dialog.open(ModalGalleryComponent, { panelClass: 'custom-dialog-container', data: { titulo: this.title, gallery: this.gallery, id: id } });
  }


}
