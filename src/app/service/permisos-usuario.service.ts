import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioPermisoDto } from '../model/usuario-permiso-dto';

@Injectable({
  providedIn: 'root',
})
export class PermisosUsuarioService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  findAllUsers(): Observable<UsuarioPermisoDto[]> {
    return this.http.get<UsuarioPermisoDto[]>(
      'http://localhost:8080/canelaUser/getUsers'
    );
  }

  modificarPermisos(perfil: UsuarioPermisoDto): Observable<UsuarioPermisoDto> {
    return this.http.put<UsuarioPermisoDto>(
      `http://localhost:8080/canelaUser/edit`,
      perfil,
      this.httpOptions
    );
  }
}
