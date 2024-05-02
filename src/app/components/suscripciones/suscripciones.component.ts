import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuscripcionDto } from 'src/app/model/suscripcion-dto';
import { SuscripcioService } from 'src/app/service/suscripcio.service';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrl: './suscripciones.component.css',
})
export class SuscripcionesComponent implements OnInit {
  constructor(
    private router: Router,
    private SuscripcioService: SuscripcioService
  ) {}

  suscripciones: SuscripcionDto[] | undefined;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  editarSuscripcion(suscripcion: any) {
    this.router.navigate(['/canela/editar-empresa']);
  }

  eliminarSuscripcion(suscripcion: any) {}

  nuevaEmpresa() {
    this.router.navigate(['/canela/crear-empresa']);
  }
}
