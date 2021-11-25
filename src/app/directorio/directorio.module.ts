import { NgModule } from '@angular/core';
import { DirectorioComponent } from './directorio.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IconsModule } from 'ng-uikit-pro-standard'



@NgModule({
  declarations: [
    DirectorioComponent
  ],
  exports: [
    DirectorioComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsModule
  ]
})
export class DirectorioModule { }
