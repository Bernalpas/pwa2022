import { convertFromMaybeForwardRefExpression } from '@angular/compiler/src/render3/util';
import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports:[
        ContadorComponent
    ]
})

export class ContadorModule{}