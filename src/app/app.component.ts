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
    const contenedor = document.getElementById('main-container');
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.style.display = 'none';
    boton.setAttribute('data-bs-toggle','modal');
    if (modo === 'agregar'){
      boton.setAttribute('data-bs-target', '#agregarUsuario');
    }
    contenedor.appendChild(boton);
    boton.click();
  }

  public guardarUsuario(): void{

  }
}
