import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerEmpresa } from '../model/ver-empresa';

@Injectable({
  providedIn: 'root',
})
export class FacturacionService {
  private apiUrl = 'http://localhost:8080/facturations';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  findById(id: number) {
    return this.http.get<VerEmpresa>(`http://localhost:8080/facturation/{id}`);
  }

  getEmpresas(): Observable<VerEmpresa[]> {
    return this.http.get<VerEmpresa[]>(this.apiUrl, this.httpOptions);
  }
}
