import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consultas } from 'src/app/Models/consultas';
import { ConsultasService } from '../../consultas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  consultaForm: FormGroup;
  titulo: string = 'Formulario App'
  

  constructor(
    private fb: FormBuilder,
    private consultasService: ConsultasService,
  ) {
    this.consultaForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      whatsapp: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_salida: ['', Validators.required],
      mensaje: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  realizarConsulta() {

    const CONSULTA: Consultas = {
      nombre: this.consultaForm.get('nombre')?.value,
      email: this.consultaForm.get('email')?.value,
      whatsapp: this.consultaForm.get('whatsapp')?.value,
      fecha_ingreso: this.consultaForm.get('fecha_ingreso')?.value,
      fecha_salida: this.consultaForm.get('fecha_salida')?.value,
      mensaje: this.consultaForm.get('mensaje')?.value,
    }

    //console.log(CONSULTA);

    this.consultasService.guardarConsulta(CONSULTA).subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e)
    })     
    this.consultaForm.reset({});
  }

}
