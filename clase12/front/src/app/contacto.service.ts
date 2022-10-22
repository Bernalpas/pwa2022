import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  constructor(private http: HttpClient) { }

  //public fetchURL: string = "/api/prueba" 

  getName(){
    return this.http.get<any>("/api/prueba")
  }


}
