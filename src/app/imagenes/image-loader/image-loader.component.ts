import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'images-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent {

  @Output() ImagenCargada: EventEmitter<any> = new EventEmitter();

  url: string = 'aaa';




  // dataUrl: string;
  // faceInfo: any;
  constructor(private httpClient: HttpClient) {

  }

  cargardeurl(): void {
    this.getImagenBinaria(this.url).subscribe(data => {
      this.ImagenCargada.emit( {name: 'prueba', dataUrl: data});
    });
  }


  getImagenBinaria(imageUrl: string): Observable<Blob> {

    console.log('Cargando la url ' + imageUrl);
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }



  openFile($event): void {
    const input = event.target;
    this.readThis(input);

  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    const that = this;
    myReader.onloadend = function(e) {
      // you can perform an action with readed data here

      that.ImagenCargada.emit( {name: file.name, dataUrl: myReader.result});

    };
    //debugger;
    myReader.readAsDataURL(file);
    // myReader.readAsText(file);
  }


  // loadImagen(b64) {
  //   this.dataUrl = b64;
  //   // this.renderer.setAttribute(this.p.nativeElement, 'src', b64);
  // }

  // mostrarInformacion(): void {
  //   this.servicio.getFaces(this.dataUrl).subscribe(response => {
  //     this.faceInfo = response;
  //   });
  // }


}
