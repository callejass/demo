import { LatLng, latLng } from 'leaflet';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
declare let L;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  map: any;

  marcadoreslluvia: Array<any> = [];
  capalluvia: any;

  marcadoresnieve: Array<any> = [];
  capanieve: any;

  zoom: 9;
  hora: 18;
  // obs$: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.hora = 18;
    this.zoom = 9;
    this.construirMapa();


    this.reloadCapas(this.zoom);
    // añadimos los manejadores para
    const that = this;
    this.map.on('zoomend', function (e) {
      console.log('zoomend', e);
      that.zoom = that.map.getZoom();
      that.reloadCapas(that.zoom);
    });

    this.map.on('moveend', function (e) {
      console.log('moveend', e);
      // console.log(this.map.getZoom());
      that.reloadCapas(that.zoom);
    });

    // const source = this.map.observable('zoomstart');
    // source.subscribe(e => {
    //   console.log('Comienzo del zoom');
    // });


  }

  changeHora(valor: number) {
    console.log(valor);
    this.reloadCapas(this.map.getZoom());
  }


  private reloadCapas(zoom: number) {
    this.reloadCapaLluvia(zoom);
    // this.reloadCapaNieve(zoom);
  }

  private reloadCapaNieve(zoom: number) {


    this.marcadoresnieve.forEach(element => {
      this.map.removeLayer(element);
    });
    this.marcadoreslluvia = [];
    this.dataService.GetDatos(zoom, 'nieve', this.hora).subscribe((data: any) => {
      data.features.forEach(element => {
        this.capanieve.addData(element);
      });
    });
  }


  private reloadCapaLluvia(zoom: number) {

    this.marcadoreslluvia.forEach(element => {
      this.map.removeLayer(element);
    });
    this.marcadoreslluvia = [];
    // this.capalluvia.layers.forEach(element => {
    //    this.capalluvia.removeLayer(element);
    // });
    this.dataService.GetDatos(zoom, 'lluvia', this.hora).subscribe((data: any) => {

      data.features.forEach(element => {
        this.capalluvia.addData(element);
      });


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

    this.map = L.map('mimapa').setView([40.415363, -3.707398], this.zoom);

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
    // capaopenstret.addTo(this.map);


    this.capalluvia = this.crearCapaLluvia();
    // this.capanieve = this.crearCapaNieve();


    const capasFenomenos = {
      'Lluvia': this.capalluvia
      // 'Nieve': this.capanieve
    };

    const baseMaps = {
      'Mapa IGN': capamapa,
      'Satélite IGN': capasatelite,
      'Raster IGN': caparaster,
      'OpenStreetMap': capaopenstret
    };

    L.control.layers(baseMaps, capasFenomenos).addTo(this.map);
     capasatelite.addTo(this.map);
     caparaster.addTo(this.map);
     capamapa.addTo(this.map);
     capaopenstret.addTo(this.map);

     this.capalluvia.addTo(this.map);
     // this.capanieve.addTo(this.map);


  }


  private crearCapaLluvia() {
    const icono = L.icon({
      iconUrl: '/assets/iconos/tiempo/lluvia/01.png',
      iconAnchor: [13, 41]
    });
    const markersOptions: any = {
      icon: icono
    };
    const that = this;
    const capa = L.geoJSON(null, {
      // style: poligonosMarkerOptions,
      // onEachFeature: this.crearpopup,
      pointToLayer: function (geoJsonPoint, latlng) {
        const marker = L.marker(latlng, markersOptions);
        const text = `<h6>${geoJsonPoint.properties.Municipio}</h6><p>Lluvia:${geoJsonPoint.properties.c_precipi}</p>`;
        marker.bindPopup(text);
        // Lo almacenamos para futuras referencias para eliminarlo
        that.marcadoreslluvia.push(marker);
        return marker;
      },
      filter: (feature: any, layer: any) => {
        const punto: LatLng = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
        return feature.properties.c_precipi > 0 && this.map.getBounds().contains(punto);
      }

    });
    return capa;
  }

  private crearCapaNieve() {
    const icono = L.icon({
      iconUrl: '/assets/iconos/tiempo/nieve/01.png',
      iconAnchor: [13, 41]
    });
    const markersOptions: any = {
      icon: icono
    };

    const that = this;
    const capa = L.geoJSON(null, {
      pointToLayer: function (geoJsonPoint, latlng) {
        const marker = L.marker(latlng, markersOptions);
        const text = `<h6>${geoJsonPoint.properties.Municipio}</h6><p>Nieve:${geoJsonPoint.properties.cNieve}</p>`;
        marker.bindPopup(text);
        that.marcadoresnieve.push(marker);
        debugger;
        return marker;
      },
      filter: (feature: any, layer: any) => {
        const punto: LatLng = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
        return this.map.getBounds().contains(punto); // feature.properties.cNieve > 0 && this.map.getBounds().contains(punto);
      }
    });
    return capa;

  }


}
