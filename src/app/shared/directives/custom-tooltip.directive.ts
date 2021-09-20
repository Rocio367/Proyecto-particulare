import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector:'[customTooltip]'
})
export class CustomTooltipDirective implements OnInit{
    /** Contenido que se va a renderizar dentro del tooltip */
  @Input('customTooltip') tooltipContent:TemplateRef<any> | ComponentType<any>;

  /** Overlay que simula ser un tooltip */
  private _overlayRef:OverlayRef;
  constructor( private overlay:Overlay,
    private overlayPositionBuilder:OverlayPositionBuilder,
    private elementRef:ElementRef,
    private viewContainerRef:ViewContainerRef,) { }
    ngOnInit():void {
      // Si se recibe el contenido a mostrar
      if (this.tooltipContent) {
        // Se crea la configuración de posicionamiento para el tooltip
        const position = this.overlayPositionBuilder
        // Se enlaza la posición del overlay al elemento portador de la directiva
        .flexibleConnectedTo(this.elementRef)
        // Se declaran las posiciones preferidas que usará el overlay al mostrarse
        .withPositions([
          {
            originX:'center',
            originY:'bottom',
            overlayX:'center',
            overlayY:'top',
            offsetX:5,
            offsetY:8,
          },
          {
            originX:'center',
            originY:'top',
            overlayX:'center',
            overlayY:'bottom',
            offsetX:5,
            offsetY:-8,
          }
        ]);
  
        // Se crea el overlay y se guarda su referencia
        this._overlayRef = this.overlay.create({
          // Configuración para la posición del overlay
          positionStrategy:position,
          // Comportamiento del overlay cuando se haga scroll y se esté mostrando
          scrollStrategy:this.overlay.scrollStrategies.close(),
          // Clase para darle estilo al overlay
          panelClass:'custom-tooltip',
        });
      }
      // Se muestra un error si la directiva no recibe contenido para mostrar
      else {
        console.error('[ERROR] La directiva tiene que recibir el contenido a mostrar...');
      }
    }
    @HostListener('mouseenter')
    private _show():void {
      // Si existe overlay se enlaza con el contenido
      if (this._overlayRef) {
        let containerPortal:TemplatePortal<any> | ComponentPortal<any>;
  
        // Creamos un TemplatePortal si lo que recibió la directiva era un Template
        if (this.tooltipContent instanceof TemplateRef) {
          containerPortal = new TemplatePortal(this.tooltipContent, this.viewContainerRef);
        }
        // En caso contrario creamos un ComponentPortal
        else {
          containerPortal = new ComponentPortal(this.tooltipContent, this.viewContainerRef);
        }
  
        // Enlazamos el portal con el overlay creado al iniciar la directiva
        this._overlayRef.attach(containerPortal);
      }
    }
  
    @HostListener('mouseout')
    private _hide():void {
      // Si existe un overlay se desenlaza del contenido
      if (this._overlayRef) {
        this._overlayRef.detach();
      }
    }
}
