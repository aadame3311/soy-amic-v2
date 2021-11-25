import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {

  @Input() routeName : string = "NavLink"
  @Input() routes : string[] = ["/delegaciones"]
  @Output() activeElement : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  checkCurrentRoute(routes : string[]): string {
    let local_route = window.location.pathname;
    let base_routes = routes.map((route) => route.split('/')[1])
    return (base_routes.includes(local_route.split('/')[1])) ? "active" : "inactive";
  }

}
