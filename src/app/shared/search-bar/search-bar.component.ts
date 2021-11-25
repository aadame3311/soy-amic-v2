import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchForm } from 'src/app/data/search-form';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  showAutoComplete : boolean = false;
  
  recentSearches : string[] | undefined = [''];

  searchForm : SearchForm = {
    name: '',
    delegacionId: "0",
    especialidadIdList: ["0"]
  }

  constructor(private router : Router) { }
  handleFocus(setFocus : boolean) {
    this.showAutoComplete = setFocus;
  }
  handleAutocompleteClick($form : NgForm, $event : Event) {
    let autocompleteTarget = $event.target as HTMLElement
    let autocompleteText = autocompleteTarget.innerText;

    this.searchForm.name = autocompleteText;

    $form.value.name = this.searchForm.name;
    this.searchSubmit($form, $event);
  }
  searchSubmit(form : NgForm, e : Event) {

    if (form.value.name !== '') {
      
      //update recent searches
      if (this.recentSearches != undefined) {
        if (this.recentSearches.length > 4) { 
          this.recentSearches.pop();
        } 
        this.recentSearches?.unshift(form.value.name);
        localStorage.setItem('recent-searches', this.recentSearches.toString());
      }
      
      //navigate to search results page
      this.router.navigate([`/resultados`, this.searchForm.name])
      return;
    }

    e.preventDefault();
  }

  fetchRecentChanges() : string[] | undefined {
    return localStorage.getItem('recent-searches')?.split(',');
  }
  ngOnInit(): void {
    localStorage.clear();

    //get recent searches
    this.recentSearches = this.fetchRecentChanges();
    if (this.recentSearches == undefined) {
      this.recentSearches = [];
    }
  }

}
