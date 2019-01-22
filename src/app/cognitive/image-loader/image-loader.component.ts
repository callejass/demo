import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListadoUrlsComponent } from '../listado-urls/listado-urls.component';
import { debug } from 'util';
import { CustomModalService } from 'src/app/custom-modal/custom-modal.service';

@Component({
  selector: 'images-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent {

  @Output() ImagenCargada: EventEmitter<any> = new EventEmitter();

  private url = 'https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-85019-oscar--2x1--940.jpg';

  urls: any[] = [
    {name: 'Culkin', url: 'https://dam.vanidades.com/wp-content/uploads/2019/01/900macaulay-culkin-amas-770x513.jpg'},
    {name: 'Ceremonia Oscars', url: 'https://media-assets-02.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-85019-oscar--2x1--940.jpg'},
    {name: 'Barça', url: 'https://img.depor.com/files/article_main/files/crop/uploads/2018/09/01/5b8a98d19459c.r_255742.0-0-624-312.jpeg'}
  ];



  // dataUrl: string;
  // faceInfo: any;
  constructor(private modalService: NgbModal, private customModalService: CustomModalService) {

  }

  pruebaabrircomponente() {
    this.customModalService.abrircomponente(ListadoUrlsComponent);
  }

  openseleccionarurl(): void {
    // alert('si');
    const modal = this.modalService.open(ListadoUrlsComponent);
    modal.componentInstance.selectEntry.subscribe(item => {
      console.log(item);
      modal.close();
      this.ImagenCargada.emit({name: item.name, dataUrl: item.url});
    });
  }


  cargardeurl(): void {

    this.ImagenCargada.emit({name: 'url', dataUrl: this.url});
    // this.getImagenBinaria(this.url).subscribe(data => {
    //   this.ImagenCargada.emit( {name: 'prueba', dataUrl: data});
    // });
  }

  openFile($event): void {
    const input = event.target;
    this.readThis(input);

  }

  // private getImagenBinaria(imageUrl: string): Observable<Blob> {

  //   console.log('Cargando la url ' + imageUrl);
  //   return this.httpClient.get(imageUrl, { responseType: 'blob' });
  // }

  private readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    const that = this;
    myReader.onloadend = function(e) {

      that.ImagenCargada.emit( {name: file.name, dataUrl: myReader.result});

    };

    myReader.readAsDataURL(file);

  }


}
