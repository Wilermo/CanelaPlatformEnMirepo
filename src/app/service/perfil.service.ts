import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilDto } from '../model/perfil-dto';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private apiUrl = 'http://localhost:8080/api/BACKEND';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  findById(id: number) {
    return this.http.get<PerfilDto>(`http://localhost:8080/users/{id}`);
  }

  modificarPerfil(perfil: PerfilDto): Observable<PerfilDto> {
    return this.http.put<PerfilDto>(
      `http://localhost:8080/users/edit`,
      perfil,
      this.httpOptions
    );
  }

  updateStatus(id: number, status: string): void {
    +this.findById(id).subscribe((e) => {
      if (e) {
        e.status = status;
      }
    });
  }

  puedeEditarEtapa(empleado: PerfilDto | undefined, etapa: string): boolean {
    if (!empleado) return false;
    const etapas = [
      'Nuevo',
      'Contactado',
      'Plan gratis',
      'Plan bronce',
      'Plan silver',
      'Plan gold',
      'Cancelado',
    ];
    const currentIndex = etapas.indexOf(empleado.status);
    const etapaIndex = etapas.indexOf(etapa);
    return etapaIndex === currentIndex + 1 || etapa === empleado.status;
  }

  debeMostrarEtapa(empleado: PerfilDto | undefined, etapa: string): boolean {
    if (!empleado) return false;
    const etapasOrdenadas = [
      'Nuevo',
      'Contactado',
      'Plan gratis',
      'Plan bronce',
      'Plan silver',
      'Plan gold',
      'Cancelado',
    ];
    let indexEtapaActual = etapasOrdenadas.indexOf(empleado.status);
    let index = etapasOrdenadas.indexOf(etapa);
    return index <= indexEtapaActual + 1; // Show only the current stage and the immediate next stage
  }
}
