import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  
  @Input() coords: string;
  @ViewChild('mapa', { static: false }) mapa;

  constructor() { }

  ngOnInit() {
    

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {

    console.log(this.coords);
    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZmFsY29tIiwiYSI6ImNrMnFnbXBkYzBlejkzY3F2dXhoemFseWEifQ.q1mMOuX5WObYc4NodwCZ7A';
    const map = new mapboxgl.Map({
                container: this.mapa.nativeElement,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: 15
              });

    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

  }

}
