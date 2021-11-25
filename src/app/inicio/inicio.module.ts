import { NgModule } from '@angular/core';
import { DelegacionesProfileComponent } from '../delegaciones/delegaciones-profile.component';
import { DelegacionesComponent } from '../delegaciones/delegaciones.component';
import { IconsModule } from '../shared/icons/icons.module';
import { MapboxComponent } from '../shared/map/mapbox.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { DirectorioModule } from '../directorio/directorio.module';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../shared/list-item/list-item.component';

@NgModule({
    imports: [
        CommonModule,
        InicioRoutingModule,
        IconsModule,
        DirectorioModule,
    ],
    exports: [
    ],
    declarations: [
        InicioComponent,
        DelegacionesComponent,
        DelegacionesProfileComponent,
        MapboxComponent,
        ListItemComponent,
    ],
    providers: [],
})
export class InicioModule { }
