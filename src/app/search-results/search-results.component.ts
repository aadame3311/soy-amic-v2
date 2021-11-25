import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchForm } from '../data/search-form';
import { SearchService } from '../data/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchForm : SearchForm = {
    name: '',
    delegacionId: '0',
    especialidadIdList: ['0']
  };
  constructor(private searchService : SearchService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log('search results page OnInit');
    this.activatedRoute.params.subscribe(params => {
      this.searchForm.name=params['name']
      
      //call search service
      this.searchService.postSearchForm(this.searchForm).subscribe(
        success => console.log(success),
        error => console.log(error)
      )
    })

  }

}
