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

  capaprueba: any;

  zoom: 13;
  obs$: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.construirMapa();

    this.construirCapaPrueba(this.zoom);
    // añadimos los manejadores para
    const that = this;
    this.map.on('zoomend', function (e) {
      console.log('zoomend', e);
      that.zoom = e.target.getZoom();
      that.construirCapaPrueba(that.zoom);
    });

    this.map.on('moveend', function (e) {
      console.log('moveend', e);
      that.construirCapaPrueba(that.zoom);
    });




    // const source = this.map.observable('zoomstart');
    // source.subscribe(e => {
    //   console.log('Comienzo del zoom');
    // });


  }

  private construirCapaPrueba(zoom: number) {

    
    const centroidesMarkerOptions = {
      radius: 2,
      fillColor: '#ff7800',
      color: '#ff7800',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };

    const icono = L.icon({
      iconUrl: '/assets/iconos/marker-icon.png',
      // iconSize: [38, 95],
       iconAnchor: [13, 41]
    });
    const markersOptions: any = {
      icon: icono
    };

    this.dataService.GetDatos(zoom, 'lluvia').subscribe(data => {


      if (this.capaprueba) {

        this.map.removeLayer(this.capaprueba);

      }
      this.capaprueba = L.geoJSON(data, {
        // style: poligonosMarkerOptions,
        // onEachFeature: this.crearpopup,
        pointToLayer: function (geoJsonPoint, latlng) {
          
          return L.marker(latlng, markersOptions);
          // return L.circleMarker(latlng, centroidesMarkerOptions);
        },
        filter: (feature: any, layer: any) => {
          const punto: LatLng = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
          const a = this.map.getBounds().contains(punto);
          if (a) {
            
            return a;
          } else {
            return a;
          }
          return this.map.getBounds().contains(punto);

          // if (this.filtroidantena === '') {
          //   return true;
          // } else {
          //   return feature.properties.id_celda === this.filtroidantena;
          // }
        }
      });
      this.capaprueba.addTo(this.map);
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
