import { Injectable } from '@angular/core';
import { PerfilDto } from '../model/perfil-dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MarketingDto} from "../model/marketing-dto";
import {Marketingstatus} from "../model/marketingstatus";

@Injectable({
  providedIn: 'root',
})
export class MarketingService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<MarketingDto[]>("http://localhost:8762/possibleclient/list");
  }

  findAllStatuses() {
    return this.http.get<Marketingstatus[]>("http://localhost:8762/marketingstatus/list");
  }

  saveAll(empresas: MarketingDto[]) {
    return this.http.post<MarketingDto[]>("http://localhost:8762/possibleclient/saveAll", empresas);
  }
}
