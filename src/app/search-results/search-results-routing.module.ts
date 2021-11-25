import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results.component';

const routes : Route[] = [
  { path: "resultados/:name", component: SearchResultsComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchResultsRoutingModule { }
