import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaDto } from '../model/empresa-dto';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private apiUrl = 'http://localhost:8080/api/BACKEND';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
}
