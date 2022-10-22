
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class InfoPaginaService{

    public equipo: any[] = [];


    constructor(private http: HttpClient) {  
        
        console.log(`Soy el Servicio de HTTP Listo!!`);

        this.cargarEquipo();
        
    }
    
    private cargarEquipo(){
        this.http.get('https://appinfo-ac43d-default-rtdb.firebaseio.com/equipo.json')
        .subscribe((resp: any) => {
            this.equipo = resp;
            console.log(resp);
        })
    }

}