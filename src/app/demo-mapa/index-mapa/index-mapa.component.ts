import { Component, OnInit } from '@angular/core';
import { latLng, LatLng, tileLayer } from 'leaflet';
@Component({
  selector: 'app-index-mapa',
  templateUrl: './index-mapa.component.html',
  styleUrls: ['./index-mapa.component.css']
})
export class IndexMapaComponent implements OnInit {

  constructor() { }
  options: any;
  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 10,
      center: latLng(40.415363, -3.707398)
    };
  }

}
