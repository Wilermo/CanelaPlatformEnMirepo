import { Injectable } from '@angular/core';
import { PerfilDto } from '../model/perfil-dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MarketingService {
  constructor(private http: HttpClient) {}
}
