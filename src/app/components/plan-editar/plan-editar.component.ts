import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlanesDto } from 'src/app/model/planes-dto';
import { InfoPlanesService } from 'src/app/service/plan-editar.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PlanEditar } from 'src/app/model/plan-editar';

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

  plan: PlanEditar | undefined;
  entradaId: number | undefined;
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
      .subscribe((PlanEditar) => (this.plan = PlanEditar));
    console.log(this.plan);
  }
  editar() {
    let inputId = this.entradaId;
    let inputNombre = this.entradaNombre;
    let inputDescrip = this.entradaDescripcion;
    let inputDurac = this.entradaDuracion;
    let inputTrabaj = this.entradaTrabajadores;
    let inputPrecio = this.entradaPrecio;

    if (
      inputId != undefined &&
      inputNombre != undefined &&
      inputDescrip != undefined &&
      inputDescrip != '' &&
      inputDurac != undefined &&
      inputTrabaj != undefined &&
      inputPrecio != undefined
    ) {
      if (this.plan != undefined) {
        this.plan.id = inputId;
        this.plan.name = inputNombre;
        this.plan.description = inputDescrip;
        this.plan.maxNumWorkers = inputTrabaj;
        this.plan.duration = inputDurac;
        this.plan.price = inputPrecio;
        console.log(this.plan);

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
