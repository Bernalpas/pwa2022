import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /* template: `
      <h1 class="title"> Hola Mundo de Angular </h1>
  `, */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  titulo: string = 'Mi Primer App';

}
