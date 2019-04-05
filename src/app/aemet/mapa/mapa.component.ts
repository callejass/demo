import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
declare let L;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  map: any;
  constructor() { }

  ngOnInit() {
    this.construirMapa();

    // añadimos los manejadores para 

    this.map.on('zoomend', function (e) { console.log('ZOOMEND', e); });


    const source = this.map.observable('zoomstart');
    source.subscribe(e => {
      console.log('Comienzo del zoom');
    });


  }


  private construirMapa() {
    // tslint:disable-next-line:max-line-length
    const formatourltiles = 'http://www.ign.es/wmts/ign-base?request=getTile&layer=IGNBaseTodo&TileMatrixSet=GoogleMapsCompatible&TileMatrix={z}&TileCol={x}&TileRow={y}&format=image/jpeg';
    // tslint:disable-next-line:max-line-length
    const formatourltiles1 = 'http://www.ign.es/wmts/pnoa-ma?request=getTile&layer=OI.OrthoimageCoverage&TileMatrixSet=GoogleMapsCompatible&TileMatrix={z}&TileCol={x}&TileRow={y}&format=image/jpeg';

    // tslint:disable-next-line:max-line-length
    const formatourltiles2 = 'http://www.ign.es/wmts/mapa-raster?request=getTile&layer=MTN&TileMatrixSet=GoogleMapsCompatible&TileMatrix={z}&TileCol={x}&TileRow={y}&format=image/jpeg';

    const formatourltilesopenmap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    this.map = L.map('mimapa').setView([40.415363, -3.707398], 13);

    const capamapa = L.tileLayer(formatourltiles, {
      attribution: 'Ministerio de Fomento - IGN',
      maxZoom: 18
    });

    const capasatelite = L.tileLayer(formatourltiles1, {
      attribution: 'Ministerio de Fomento - IGN',
      maxZoom: 18
    });

    const caparaster = L.tileLayer(formatourltiles2, {
      attribution: 'Ministerio de Fomento - IGN',
      maxZoom: 18
    });

    const capaopenstret = L.tileLayer(formatourltilesopenmap, {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const baseMaps = {
      'Mapa IGN': capamapa,
      'Satélite IGN': capasatelite,
      'Raster IGN': caparaster,
      'OpenStreetMap': capaopenstret
    };

    L.control.layers(baseMaps).addTo(this.map);

    capasatelite.addTo(this.map);
    capaopenstret.addTo(this.map);
    caparaster.addTo(this.map);
    capamapa.addTo(this.map);

  }


}
