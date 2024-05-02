import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanesDto } from 'src/app/model/planes-dto';
import { InfoPlanesService } from 'src/app/service/info-planes.service';

@Component({
  selector: 'app-plan-crear',
  templateUrl: './plan-crear.component.html',
  styleUrl: './plan-crear.component.css',
})
export class PlanCrearComponent implements OnInit {
  constructor(
    private router: Router,
    private InfoPlanesService: InfoPlanesService
  ) {}

  nombre: string | undefined;
  descripcion: string | undefined;
  duracion: string | undefined;
  trabajadores: number | undefined;
  bonos: number | undefined;

  plan: PlanesDto | undefined;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardarInformacion() {
    let name = this.nombre;
    let description = this.nombre;
    let duration = this.duracion;
    let maxNumWorker = this.trabajadores;
    let bonuses = this.bonos;
    if (
      name != undefined &&
      name != ' ' &&
      description != undefined &&
      description != ' ' &&
      duration != undefined &&
      duration != ' ' &&
      maxNumWorker != undefined &&
      bonuses != undefined
    ) {
      let planNuevo = new PlanesDto(
        name,
        description,
        duration,
        maxNumWorker,
        bonuses
      );
    }
  }
}
