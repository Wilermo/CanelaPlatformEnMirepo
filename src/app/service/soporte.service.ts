import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Soporte } from '../model/soporte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoporteService {
  private apiUrl = 'http://localhost:8080/canelaUser/support-logs';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getSoporte(): Observable<Soporte[]> {
    return this.http.get<Soporte[]>(this.apiUrl, this.httpOptions);
  }
}
