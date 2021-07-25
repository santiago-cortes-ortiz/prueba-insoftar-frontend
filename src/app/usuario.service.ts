import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "./usuario";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiPruebaBackend = environment.apiPruebaBackend;

  constructor(private http: HttpClient) { }

  public listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiPruebaBackend}/usuarios`);
  }

  public guardarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiPruebaBackend}/usuarios`, usuario);
  }

  public actualizarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiPruebaBackend}/usuarios`, usuario);
  }

}
