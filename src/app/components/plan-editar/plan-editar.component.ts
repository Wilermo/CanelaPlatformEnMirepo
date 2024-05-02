import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlanesDto } from 'src/app/model/planes-dto';
import { InfoPlanesService } from 'src/app/service/info-planes.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plan-editar',

  templateUrl: './plan-editar.component.html',
  styleUrl: './plan-editar.component.css',
})
export class PlanEditarComponent implements OnInit {
  constructor(
    private router: Router,
    private PlanService: InfoPlanesService,
    private route: ActivatedRoute
  ) {}

  plan: PlanesDto | undefined;
  entradaNombre: string | undefined;
  entradaDescripcion: string | undefined;
  entradaDuracion: number | undefined;
  entradaTrabajadores: number | undefined;
  entradaPrecio: number | undefined;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.PlanService.findById(+params.get('id')!))
      )
      .subscribe((PlanesDto) => (this.plan = PlanesDto));
  }
  editar() {
    let inputNombre = this.entradaNombre;
    let inputDescrip = this.entradaDescripcion;
    let inputDurac = this.entradaDuracion;
    let inputTrabaj = this.entradaTrabajadores;
    let inputPrecio = this.entradaPrecio;

    if (
      inputNombre != undefined &&
      inputDescrip != undefined &&
      inputDescrip != '' &&
      inputDurac != undefined &&
      inputTrabaj != undefined &&
      inputPrecio != undefined
    ) {
      if (this.plan != undefined) {
        this.plan.name = inputNombre;
        this.plan.description = inputDescrip;
        this.plan.maxNumWorker = inputTrabaj;
        this.plan.duration = inputDurac;
        this.plan.price = inputPrecio;

        this.PlanService.modificarPlan(this.plan).subscribe((result) => {
          this.router.navigate(['/canela/planes']);
        });
      }
    }
  }
  volver() {
    this.router.navigate(['/canela/planes']);
  }
}
