import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DelegacionesComponent } from '../delegaciones/delegaciones.component';
import { DirectorioComponent } from '../directorio/directorio.component';
import { InicioComponent } from './inicio.component';

const routes : Route[] = [
    { path: "inicio", component: InicioComponent },
    { path: "delegaciones", component: DelegacionesComponent}

    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [
    ],
    providers: [],
})
export class InicioRoutingModule { }
