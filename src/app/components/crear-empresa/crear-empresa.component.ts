import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/empresa.service';
import { EmpresaDto } from 'src/app/model/empresa-dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrl: './crear-empresa.component.css',
})
export class CrearEmpresaComponent {
  constructor(private EmpresaService: EmpresaService, private router: Router) {}
  nit: string | undefined;
  nombre: string | undefined;
  phone: string | undefined;
  maxNumWorker: number | undefined;
  status: string | undefined;

  nuevaEmpresa: EmpresaDto | undefined;

  ngOnInit(): void {}

  crearEmpresa() {
    let NIT = this.nit;
    let nombre = this.nombre;
    let phone = this.phone;
    let maxNumWorker = this.maxNumWorker;
    let status = this.status;
    if (
      nombre != undefined &&
      nombre != ' ' &&
      NIT != undefined &&
      NIT != ' ' &&
      phone != undefined &&
      phone != ' ' &&
      maxNumWorker != undefined &&
      status != undefined &&
      status != ' '
    ) {
      let empresaNueva = new EmpresaDto(
        NIT,
        nombre,
        phone,
        maxNumWorker,
        status
      );
    }
  }
}
