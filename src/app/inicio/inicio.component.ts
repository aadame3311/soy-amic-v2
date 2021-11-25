import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  checkCurrentSubRoute(sub_route : string) : string {
    let local_route = window.location.pathname;
    return (sub_route === local_route.split('/')[2])?"active":"";
  }

  ngOnInit(): void {
  }

}
