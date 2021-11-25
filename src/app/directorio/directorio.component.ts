import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchForm } from '../data/search-form';
import { SearchService } from '../data/search.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnChanges, OnInit {

  @Input() delegacionId! : string;
  @Input() minified : boolean = false;

  //keep default copy of data in case we need to reset it
  private _searchForm : SearchForm = {
    name: '',
    delegacionId: '1',
    especialidadIdList: []
  };
  searchForm : SearchForm = { ...this._searchForm }
  postError : boolean = false;
  postErrorMessage! : string;
  searchResults! : string[];
  loadingSearchResults: boolean = false;

  especialidadOptions : any = [];

  constructor(private searchService : SearchService) {}

  onHttpSuccess(successResponse : any) {
    this.postError = false;
    this.searchResults = successResponse.searchResults;

    this.loadingSearchResults = false;
  }
  onHttpError(errorResponse : any) {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;

    this.loadingSearchResults = false;
  }

  /* especialidades selectpicker will be huge 
    should use trackby method to be more efficient when
    loading these into the DOM*/
  trackByEspecialidadId(index:number, especialidad:any) {
    return especialidad.id;
  }

  searchSubmit(form: NgForm) {
    //use SearchForm object since this includes delegacionId
    //form.value won't include delegacionId
    if (form.invalid) {
      this.postError = form.invalid;
      this.postErrorMessage = '';
      return;
    }
    this.searchResults = [];
    this.loadingSearchResults = true;
    this.searchService.postSearchForm(this.searchForm).subscribe(
      success => this.onHttpSuccess(success),
      error => this.onHttpError(error)
    ) 
  }

  ngOnInit() {
    this.especialidadOptions = [
      { id: 1, name: 'especialidad 1' },
      { id: 2, name: 'especialidad 2' },
      { id: 3, name: 'especialidad 3' },
      { id: 4, name: 'especialidad 4' },
      { id: 5, name: 'especialidad 5' },
    ]
  }
  ngOnChanges($changes : SimpleChanges) {
    //on map selection, set delegacionId of form
    this.searchForm.delegacionId = $changes.delegacionId.currentValue;
  }
}
