import { Environment } from '../../../environments/environment'
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {
  map! : mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  initialLongitude = -101;
  initialLatitude = 24;
  
  @ViewChild('mapContainer', { static: true}) mapContainer! : ElementRef;
  @Output() markerOnClick : EventEmitter<any> = new EventEmitter<any>();
  
  delegacionesLocationData : any = [
    {
      id: "1",
      longitude: -100.3161,
      latitude: 25.6866,
    },
    {
      id: "2",
      longitude: -89.618791,
      latitude: 21.007949
    },
    {
      id: "3",
      longitude: -107.409624,
      latitude: 24.784942
    },
  ]

  constructor() {}
  
  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: Environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 4,
      center: [this.initialLongitude, this.initialLatitude]
    });

    // Set options
    for (let delegacionLocation of this.delegacionesLocationData) {
      //create marker element and attach css and event binders
      let $marker = document.createElement('div');
      $marker.className = 'custom-marker';
      $marker.addEventListener('click', () => {
        setTimeout(() => {
          if (this.mapContainer != null) {
            window.scroll(0, this.mapContainer.nativeElement.offsetHeight+15);
          }
        }, 100)
        this.markerOnClick.emit(delegacionLocation.id);
      });

      //can't add in css file since will be overwritten by the inline
      //style attribute that mapbox adds
      $marker.style.width = "50px";
      $marker.style.height = "50px";
      $marker.style.backgroundImage = "url('../../../assets/icons/logo_mapIcon.svg')";
      $marker.style.backgroundSize = "cover";
      $marker.style.cursor = "pointer";
      
      //use generated HTML element to create a mapbox map marker
      new mapboxgl.Marker($marker)
        .setLngLat([delegacionLocation.longitude, delegacionLocation.latitude])
        .addTo(this.map);
    }


    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}