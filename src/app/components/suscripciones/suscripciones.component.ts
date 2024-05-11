import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaDto } from 'src/app/model/empresa-dto';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrl: './suscripciones.component.css',
})
export class SuscripcionesComponent implements OnInit {
  constructor(
    private router: Router,
    private SuscripcioService: EmpresaService
  ) {}

  suscripciones: EmpresaDto[] | undefined;
  ngOnInit(): void {
    this.SuscripcioService.getEmpresas().subscribe(
      (data) => {
        console.log(data);
        this.suscripciones = data;
      },
      (error) => {
        console.error('Ocurrió un error al obtener los planes:', error);
      }
    );
  }

  editarSuscripcion(suscripcion: any) {
    this.router.navigate(['canela/empresa/edit/:id']);
  }

  eliminarSuscripcion(suscripcion: any) {}

  nuevaEmpresa() {
    this.router.navigate(['/canela/empresa/add']);
  }

  verSucripcion(suscripcion: any) {
    this.router.navigate(['/canela/empresa/ver:id']);
  }
  facturas() {
    this.router.navigate(['/canela/empresa/ver:id']);
  }
}
