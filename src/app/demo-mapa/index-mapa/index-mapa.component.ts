import { Component, OnInit } from '@angular/core';
import { latLng, LatLng, tileLayer, circle, polygon, features, geometry } from 'leaflet';
import { DataService } from '../data.service';
declare let L;
@Component({
  selector: 'app-index-mapa',
  templateUrl: './index-mapa.component.html',
  styleUrls: ['./index-mapa.component.css']
})
export class IndexMapaComponent implements OnInit {
  filtroidantena: string = '';
  antenas: any;
  map: any;
  capaantenas: any;
  capacentroides: any = {
    type: 'FeatureCollection',
    features: []
  };
  // layersControl = {
  //   baseLayers: {
  //     'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
  //     'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
  //   },
  //   overlays: {
  //     'Big Circle': circle([ 46.95, -122 ], { radius: 50000 }),
  //     'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]]),
  //     'Antenas': this.antenas
  //   }
  // };
  // options: any;
  constructor(
    private dataService: DataService
  ) { }


  ngOnInit() {
    // this.options = {
    //   layers: [
    //     tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    //   ],
    //   zoom: 10,
    //   center: latLng(40.415363, -3.707398)
    // };

    this.map = L.map('mimapa').setView([40.415363, -3.707398], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    // cargamos la capa de antenas
    this.cargarAntenas();
  }

  buscar() {
    
    this.cargarAntenas();
  }

  private cargarAntenas() {
    if (this.capaantenas) {
      this.map.removeLayer(this.capaantenas);
    }
    this.dataService.loadLayerData('celdas_madrid.geojson').subscribe(data => {

      //saco los datos de los centroides
      let dcentroides: any = {
        type: 'FeatureCollection',
        features: []
      };

      data.features.forEach(element => {
        dcentroides.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              element.properties.centroide.coordinates[0], element.properties.centroide.coordinates[1]
            ]
          }
        });
      });
      const centroidesMarkerOptions = {
        radius: 2,
        fillColor: '#ff7800',
        color: '#ff7800',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };

      const poligonosMarkerOptions = {
        color: 'Red'
      };
      this.capacentroides = L.geoJSON(dcentroides, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, centroidesMarkerOptions);
        }
      });
      this.capacentroides.addTo(this.map);

      this.capaantenas = L.geoJSON(data, {
        style: poligonosMarkerOptions,
        onEachFeature: this.crearpopup,

        filter: (feature: any, layer: any) => {
          if (this.filtroidantena === '') {
            return true;
          } else {
            return feature.properties.id_celda === this.filtroidantena;
          }
        }
      });
      this.capaantenas.addTo(this.map);

      //this.antenas = data; // .features[0].geometry.coordinates;
      //this.layersControl.overlays.Antenas = data;
    });
  }

  private addCentroide(feature: any, layer: any) {
    if (feature.properties && feature.properties.centroide) {
      this.capacentroides.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            feature.properties.centroide.coordinates[0], feature.properties.centroide.coordinates[0]
          ]
        }
      });
    }
  }
  private crearpopup(feature: any, layer: any) {
    if (feature.properties && feature.properties.id_celda) {
      layer.bindPopup(feature.properties.id_celda);
    }
    // if (feature.properties && feature.properties.centroide) {
    //   this.capacentroides.features.push({
    //     type: 'Feature',
    //     geometry: {
    //       type: 'Point',
    //       coordinates: [
    //         feature.properties.centroide.coordinates[0], feature.properties.centroide.coordinates[0]
    //       ]
    //     }
    //   });
    // }
  }



  private filtrar(feature: any, layer: any) {
    // return true;
  }


}
