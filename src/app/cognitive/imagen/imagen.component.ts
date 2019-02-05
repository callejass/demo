import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MicrosoftApiService } from '../microsoft-api.service';
import { rendererTypeName } from '@angular/compiler';
import { PocService } from '../poc.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'images-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() dataUrl: string;
  @ViewChild('contedorImagen')capaImagen: ElementRef;
  @ViewChild('imagen')imagen: ElementRef;

  rectangulos: any[] = [];
  facesInformation: any[];
  generalInformation: any;
  selected: string = null;
  selectedFaceInfo: any;
  constructor(private servicio: MicrosoftApiService, private renderer: Renderer2, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.addRectangulo(null);
  }

  load() {
    this.loadInformation();
    this.loadFacesInformation();
  }

  loadInformation() {
    this.servicio.getInfo(this.dataUrl).subscribe(response => {
      this.generalInformation = response;
    });
  }

  loadFacesInformation() {
    this.spinner.show();
    this.servicio.getFaces(this.dataUrl).subscribe(response => {
      this.facesInformation = response;

      //añado x rectangulos, uno por cada info de cara que hayamos recuperado

      this.facesInformation.forEach(info => {
        this.addRectangulo(info);
      });
      this.spinner.hide();
    });
  }


  private addRectangulo(info) {

    const anchuraOriginal = this.imagen.nativeElement.naturalWidth;

    const anchuraEstablecida = this.imagen.nativeElement.clientWidth;
    const proporcion = anchuraOriginal / anchuraEstablecida;

    const rectangulo: ElementRef = this.renderer.createElement('div');

    this.renderer.addClass(rectangulo, 'marcador');
    this.renderer.setStyle(rectangulo, 'top', this._toPixels(info.faceRectangle.top, proporcion));
    this.renderer.setStyle(rectangulo, 'left', this._toPixels(info.faceRectangle.left, proporcion));
    this.renderer.setStyle(rectangulo, 'width', this._toPixels(info.faceRectangle.width , proporcion));
    this.renderer.setStyle(rectangulo, 'height', this._toPixels(info.faceRectangle.height, proporcion));
    this.renderer.setAttribute(rectangulo, 'data-faceid', info.faceId);

    this.renderer.appendChild(this.capaImagen.nativeElement, rectangulo);
    this.rectangulos.push(rectangulo);

    this.renderer.listen(rectangulo, 'click', event => {
      // console.log(event);
      this.selected = event.srcElement.attributes['data-faceid'].value;
      // selecciono la información
      this.selectedFaceInfo = this.facesInformation.filter((e) => e.faceId === this.selected)[0];
      // debugger;
      this.rectangulos.forEach((r) => {
        if (r.attributes['data-faceid'].value === this.selected) {
          this.renderer.setStyle(r, 'border-color', 'green');
          this.renderer.setStyle(r, 'border-width', '2px');
        } else {
          this.renderer.setStyle(r, 'border-color', 'red');
          this.renderer.setStyle(r, 'border-width', '1px');
        }

      });
      // pongo en verde el rectangulo y en rojo todos los demás
      // this.selected =  rectangulo.nativeElement.attributes['data-faceid'].value; //  rectangulo.nativeElement.

    });
    // this.selected = info.faceId;

  }
  private _toPixels(medida: number, proporcion: number): string {
    const resul: string = Math.floor(medida / proporcion) + 'px';

    return resul;
  }







}
