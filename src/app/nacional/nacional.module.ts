import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectorioModule } from '../directorio/directorio.module';
import { NacionalRoutingModule } from './nacional-routing.module';

import { NacionalComponent } from './nacional.component';

@NgModule({
    imports: [
        CommonModule,
        NacionalRoutingModule,
        DirectorioModule
    ],
    exports: [],
    declarations: [
        NacionalComponent,
    ],
    providers: [],
})
export class NacionalModule { }
