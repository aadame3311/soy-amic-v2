import { Component, OnInit, Input, Output } from '@angular/core';
import { Environment } from './../../environments/environment';

@Component({
  selector: 'app-delegaciones-profile',
  templateUrl: './delegaciones-profile.component.html',
  styleUrls: ['./delegaciones-profile.component.scss']
})
export class DelegacionesProfileComponent implements OnInit {

  /* delete later. shouldn't load all.
      Make single call to api service to request
      single delegacion */
  delegaciones : any = [
    {
      id: "1",
      name: "Nuevo Leon",
      city: "Monterrey", 
      state: "Nuevo Leon",
      email: "nuevoleon@delegacion.mx",
      phone: "(123)421-1235",
      address: "Anillo Vial Metropolitano (Avenida Francisco Samohano) # 77, Col. Adolfo Prieto C.P. 67120, Guadalupe, Nuevo León.",
      imageSrc: "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/mexico/office-pages/monterrey-mobile.jpg?rev=e5e3ef29c4e142a2b62dfdc5c8c2b7ff",
      longitude: -100.3161,
      latitude: 25.6866,
    },
    {
      id: "2",
      name: "Yucatán",
      city: "Mérida", 
      state: "Yucatán",
      email: "yucatan@delegacion.mx",
      phone: "999 261 6975",
      address: "Av Campestre 55, Campestre, 97120 Mérida, Yuc., Mexico",
      imageSrc: "https://travelyucatan.com/wp-content/uploads/2015/10/Chichen-Itza-Tours.jpg",
      longitude: -89.618791,
      latitude: 21.007949
    },
    {
      id: "3",
      name: "Sinaloa",
      city: "Sinaloa", 
      state: "Culiacán",
      email: "sinaloa@delegacion.mx",
      phone: "(123)421-1235",
      address: "Bahia de Acapulco # 2833, Col. Nuevo C.P. 80170, Culiacán, Sinaloa.",
      imageSrc: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/137000/137769-Mazatlan.jpg",
      longitude: -107.409624,
      latitude: 24.784942
    },
  ]
  convenios : any = [
    {
      id: 1,
      description: "convenio 1",
    },
    
    {
      id: 2,
      description: "convenio 2",
    },
    {
      id: 3,
      description: "convenio 3",
    },

  ];
  posts : any = [
    {
      id: "1",
      source: 'facebook',
      postDate: "1d",
      description: `
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.
      `,
    },
    
    {
      id: "2",
      source: 'twitter',
      postDate: "2d",
      description: `
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua.
      `,
    }
  ];
  directivos : any = [
    {
      id: "1", 
      name: "Antonio Adame",
      position: "Presidente"
    },
    {
      id: "2",
      name: "Cecilia Adame",
      position: "Vice-Presidente"
    }
  ]


  private _delegacionId : string = "-1";
  delegacion : any 
  iconSize : number = 10

  @Input() set delegacionId(value:string) {
    this._delegacionId = value;
    this.delegacion = this.delegaciones.find((item:any) => item.id === this.delegacionId);
  }
  get delegacionId(): string {
    return this._delegacionId;
  }

  featureEnabled() : Boolean {
    return Environment.featureFlags.enableFollowFeature;
  }

  toggleLike(event : MouseEvent, delegacionId : String) {
    let obj = event.currentTarget as HTMLElement;
    if (obj.classList.contains('btn-outline-secondary')) {
      //follow
      obj.classList.remove('btn-outline-secondary');
      obj.classList.add('btn-primary');
    } else {
      //unfollow
      obj.classList.remove('btn-primary');
      obj.classList.add('btn-outline-secondary');
    }
  }

  getFollowStyling(userId : String, delegacionId : String) : String {
    return (true)? "btn-primary" : "btn-outline-secondary" 
  }
  
  constructor() {}
  ngOnInit() : void {}
}
