import { Component } from '@angular/core';
import {Usuario} from "./usuario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-users';

  public mostrarFormulario(usuario: Usuario, modo: string): void{

  }

}
