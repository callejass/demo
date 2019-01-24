import { Component, Output, EventEmitter, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListadoUrlsComponent } from '../listado-urls/listado-urls.component';
import { debug } from 'util';
import { CustomModalService } from 'src/app/custom-modal/custom-modal.service';
import { CustomModalConfig } from 'src/app/custom-modal/custom-modal.config';
import { CustomModalRef } from 'src/app/custom-modal/custom-modal-ref';

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
  constructor(@Optional() public config: CustomModalConfig,
              @Optional() public modalRef: CustomModalRef,
              private customModalService: CustomModalService) {

  }

  // pruebaabrircomponente1() {
  //   const config = {
  //     size: 'lg',
  //     title: 'Una prueba 1',
  //     inputdata: {
  //       parametro1: 'a',
  //       paremetro2: 'b'
  //     }
  //   };
  //   this.customModalService.abrirComponente(ListadoUrlsComponent, config);
  // }
  // pruebaabrircomponente2() {
  //   const config = {
  //     size: 'sm',
  //     title: 'Una prueba 2',
  //     inputdata: {
  //       parametro1: 'a',
  //       parametro2: 'b'
  //     }
  //   };
  //   const modalresult = this.customModalService.abrirComponente(ListadoUrlsComponent, config).result;

  //   modalresult.then(
  //     (datosimagen) => {
  //       console.log(datosimagen);
  //       this.ImagenCargada.emit({name: datosimagen.name, dataUrl: datosimagen.url});
  //     }, (reason) => { console.log(reason); }
  //     );

  // }

  // openseleccionarurl(): void {
  //   // alert('si');
  //   const modal = this.modalService.open(ListadoUrlsComponent);
  //   modal.componentInstance.selectEntry.subscribe(item => {
  //     console.log(item);
  //     modal.close();
  //     this.ImagenCargada.emit({name: item.name, dataUrl: item.url});
  //   });
  // }

  select(name: string) {
    if (this.modalRef) {
      const itemseleccionado = this.urls.filter(item => item.name === name)[0];
      this.modalRef.accept({name: itemseleccionado.name, dataUrl: itemseleccionado.url});
    } else {
      alert(this.urls.filter(item => item.name === name)[0]);
    }

    // this.selectEntry.emit(this.urls.filter(item => item.name === name)[0]);
  }
  cargardeurl(): void {
    this.modalRef.accept({name: 'fromurl', dataUrl: this.url});
    // this.ImagenCargada.emit({name: 'url', dataUrl: this.url});
    // this.getImagenBinaria(this.url).subscribe(data => {
    //   this.ImagenCargada.emit( {name: 'prueba', dataUrl: data});
    // });
  }

  openFile($event): void {
    const input = event.target;
    this.readThis(input);
  }

  private readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    const that = this;
    myReader.onloadend = function(e) {
      if (that.modalRef) {
        that.modalRef.accept( {name: file.name, dataUrl: myReader.result});
      }
      // that.ImagenCargada.emit( {name: file.name, dataUrl: myReader.result});

    };

    myReader.readAsDataURL(file);

  }


}
