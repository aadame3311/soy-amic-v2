import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NacionalComponent } from './nacional.component';

const routes : Route[] = [
    {path: "nacional", component: NacionalComponent}
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [

    ],
    providers: [],
})
export class NacionalRoutingModule { }
