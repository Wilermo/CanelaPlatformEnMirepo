import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaEditar } from '../model/empresa-editar';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private apiUrl = 'http://localhost:8080/facturations';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  guardarEmpresa(nuevaEmpresa: EmpresaEditar): Observable<EmpresaEditar> {
    return this.http.post<EmpresaEditar>(
      'http://localhost:8080/companies',
      nuevaEmpresa,
      this.httpOptions
    );
  }
  modificarEmpresa(empresa: EmpresaEditar): Observable<EmpresaEditar> {
    return this.http.put<EmpresaEditar>(
      `http://localhost:8080/companies/edit`,
      empresa,
      this.httpOptions
    );
  }
  findById(id: number) {
    return this.http.get<EmpresaEditar>(`http://localhost:8080/companies/{id}`);
  }

  getEmpresas(): Observable<EmpresaEditar[]> {
    return this.http.get<EmpresaEditar[]>(this.apiUrl, this.httpOptions);
  }
}
