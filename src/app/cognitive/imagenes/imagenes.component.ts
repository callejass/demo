import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { CustomModalService } from 'src/app/custom-modal/custom-modal.service';
import { ImageLoaderComponent } from '../image-loader/image-loader.component';

@Component({
  selector: 'images-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes: any[] = [];
  count = 0;
  triggered = false;
  public tabObject: any;
  constructor(private customModalService: CustomModalService) {

  }

  ngOnInit() {

  }

  lanzarCargarImagen() {

    const config = {
      size: 'lg',
      title: 'Cargar imagen',
      inputdata: {
        parametro1: 'a',
        paremetro2: 'b'
      }
    };

    const modalresult = this.customModalService.abrirComponente(ImageLoaderComponent, config, true).result;

    modalresult.then(
      (datosimagen) => {
        console.log(datosimagen);
        this.addImagen(datosimagen);
        // this.ImagenCargada.emit({name: datosimagen.name, dataUrl: datosimagen.url});
      }
    );
  }

  addImagen($event) {
    this.imagenes.push($event);
    
  }

}
