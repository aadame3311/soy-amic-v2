import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  autoCompleteResults : any[] = [];
  @Output() onAutocompleteClick : EventEmitter<Event> = new EventEmitter<Event>();
  @Input() isVisible = false;
  @Input() autocompleteList : string[] | undefined = [];
  constructor() { }
  toggleView() {
    this.isVisible = false;
  }
  handleAutocompleteItemClick($event : Event) {
    this.onAutocompleteClick.emit($event);
  }
  ngOnInit(): void {
  }

}
