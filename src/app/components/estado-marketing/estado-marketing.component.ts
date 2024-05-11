import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MarketingService} from "../../service/marketing.service";
import {Marketingstatus} from "../../model/marketingstatus";


@Component({
  selector: 'app-estado-marketing',
  templateUrl: './estado-marketing.component.html',
  styleUrl: './estado-marketing.component.css'
})
export class EstadoMarketingComponent implements OnInit {
  constructor(
    private router: Router,
    private marketingService: MarketingService,
  ) {}

  estados : Marketingstatus[] | undefined;
  nuevo_estado: string | undefined;

  ngOnInit(): void {
    this.marketingService.findAllStatuses().subscribe(estados => this.estados = estados);
  }

  guardar(){
    if(this.nuevo_estado!=undefined){
      let estado = new Marketingstatus(-1,this.nuevo_estado);
      this.marketingService.saveStatus(estado).subscribe(x => x);
    }
    window.location.reload();
  }

  eliminarEstado(id: number){
    this.marketingService.delete(id).subscribe(x => x);
    window.location.reload();
  }
}
