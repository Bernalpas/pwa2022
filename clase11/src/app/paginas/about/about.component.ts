
import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/servicios/info-pagina.service';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'
})

export class AboutComponent {

    constructor(public infoService: InfoPaginaService){

    }

    
}