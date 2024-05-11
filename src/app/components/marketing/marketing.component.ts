import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MarketingService} from "../../service/marketing.service";
import {MarketingDto} from "../../model/marketing-dto";
import {Marketingstatus} from "../../model/marketingstatus";

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css',
})
export class MarketingComponent implements OnInit {
  empresas: MarketingDto[] | undefined;

  existingStatuses: Marketingstatus[] | undefined;
  nuevoStatus: string | undefined;
  constructor(
    private router: Router,
    private marketingService: MarketingService
  ) {}

  ngOnInit(): void {
    this.marketingService.findAll().subscribe(empresas => this.empresas = empresas);
    this.marketingService.findAllStatuses().subscribe(estados => this.existingStatuses = estados);
  }

  onChange(value: string) {
    this.nuevoStatus = value;
  }

  nuevoEstado(){

  }

  guardarCambios(){
    if(this.empresas != undefined){
      this.marketingService.saveAll(this.empresas).subscribe(x => x);
    }
  }
}
