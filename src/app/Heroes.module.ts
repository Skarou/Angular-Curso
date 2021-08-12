import {NgModule} from '@angular/core'

import { HeroeComponent } from './Heroe/heroe.component';
import { ListadoHComponent } from './Heroe/listado-h/listado-h.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoHComponent
    ],
    exports:[
        ListadoHComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule {}