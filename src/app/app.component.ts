import { Component } from '@angular/core';
import {Usuario} from "./usuario";
import {UsuarioService} from "./usuario.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usuarios: Usuario[] = [];

  public usuarioModificar: Usuario = null;

  constructor(private servicioUsuarios: UsuarioService) {

  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  public mostrarFormulario(usuario: Usuario, modo: string): void{
    const contenedor = document.getElementById('main-container');
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.style.display = 'none';
    boton.setAttribute('data-bs-toggle','modal');
    if (modo === 'agregar'){
      boton.setAttribute('data-bs-target', '#agregarUsuario');
    }
    if (modo === 'modificar'){
      this.usuarioModificar = usuario;
      boton.setAttribute('data-bs-target', '#modificarUsuario');
    }
    contenedor.appendChild(boton);
    boton.click();
  }

  public obtenerUsuarios(): void{
    this.servicioUsuarios.listarUsuarios().subscribe(
      (respuesta: Usuario[]) => {
        this.usuarios = respuesta;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public guardarUsuario(formulario: NgForm): void{
    this.servicioUsuarios.guardarUsuario(formulario.value).subscribe(
      (respuesta: Usuario) => {
        formulario.reset();
        console.log(respuesta);
        this.obtenerUsuarios();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
        formulario.reset();
      }
    )
    formulario.reset();
  }

  public actualizarUsuario(formularioEditar: NgForm): void{
    this.servicioUsuarios.actualizarUsuario(formularioEditar.value).subscribe(
      (respuesta: Usuario) => {
        console.log(respuesta);
        this.obtenerUsuarios();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
        formularioEditar.reset();
      }
    );
  }

}
