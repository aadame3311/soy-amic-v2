import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() items : any[] = [
    {name: ''}
  ];
  @Input() leftIconClass : string = "fa-angle-left";
  @Input() rightIconClass : string = "fa-angle-right";

  constructor() { }

  ngOnInit(): void {
  }

}
