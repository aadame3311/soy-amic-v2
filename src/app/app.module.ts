import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnderConstructionComponent } from './shared/site-notifications/under-construction/under-construction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioModule } from './inicio/inicio.module';
import { NacionalModule } from './nacional/nacional.module';
import { NavLinkComponent } from './shared/nav-link/nav-link.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//import { MdbModule } from 'mdb-angular-ui-kit';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsRoutingModule } from './search-results/search-results-routing.module';
import { AutocompleteComponent } from './shared/search-bar/autocomplete/autocomplete.component';
import { ListItemComponent } from './shared/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLinkComponent,
    UnderConstructionComponent,
    SearchBarComponent,
    AutocompleteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    InicioModule,
    // NacionalModule,
    FormsModule,
    SearchResultsRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    //MdbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
