import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../contacto.service'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulo: string = 'Lista de contactos: '
  public contact: any;
  public mostrar: boolean = false;


  constructor(private contactoServicio: ContactoService) {}

  ngOnInit(): void {
    this.mostrarNombre()
  }

  mostrarNombre(){
    this.contactoServicio.getName()
    .subscribe((data: any) => {
      console.log(data);
      this.contact = data;
    })
  }

  mostrarInfo() {
    this.mostrar = !this.mostrar
  }



}
