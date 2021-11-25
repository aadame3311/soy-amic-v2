import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delegaciones',
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.scss']
})
export class DelegacionesComponent implements OnInit {

  delegacionProfile : any 
  convenios : any[] = [{}]
  delegacionId : string = "-1";
  posts : any[] = [{}]
  directivos : any[] = [{}]
  profileVisible : boolean = false;

  constructor(private titleService : Title ) { 
    this.titleService.setTitle("soyAmic | Delegaciones")
    this.convenios = [{}]
    this.directivos = [{}];
    this.delegacionProfile = {
      name: "Cargando",
      email: "Cargando",
      phone: "Cargando",
      address: "Cargando",
      imageSrc: "https://amicstorage1.blob.core.windows.net/amicprofiles/default/profile_picture.jpg"
    }
  }

  markerClickHandler(delegacionId : any) {
    this.profileVisible = true;
    this.delegacionId = delegacionId;
   
  }

  ngOnInit(): void {
  }

}
