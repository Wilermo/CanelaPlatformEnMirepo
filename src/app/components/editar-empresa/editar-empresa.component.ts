import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmpresaDto } from 'src/app/model/empresa-dto';
import { EmpresaService } from 'src/app/service/empresa.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrl: './editar-empresa.component.css',
})
export class EditarEmpresaComponent implements OnInit {
  constructor(
    private router: Router,
    private EmpresaService: EmpresaService,
    private route: ActivatedRoute
  ) {}

  empresa: EmpresaDto | undefined;
  entradaNombre: string | undefined;
  entradanNIT: number | undefined;
  entradaCorreo: string | undefined;
  entradaTelefono: number | undefined;
  entradaTrabajadores: number | undefined;
  entradaDireccion: string | undefined;
  entradaFechaTerminacion: Date | undefined;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.EmpresaService.findById(+params.get('id')!))
      )
      .subscribe((EmpresaDto) => (this.empresa = EmpresaDto));
  }

  editar() {
    let nombre = this.entradaNombre;
    let NIT = this.entradanNIT;
    let correo = this.entradaCorreo;
    let phone = this.entradaTelefono;
    let maxNumWorker = this.entradaTrabajadores;
    let direccion = this.entradaDireccion;
    let fechaFinal = this.entradaFechaTerminacion;

    if (
      NIT != undefined &&
      nombre != undefined &&
      nombre != '' &&
      correo != undefined &&
      correo != '' &&
      phone != undefined &&
      maxNumWorker != undefined &&
      direccion != '' &&
      direccion != undefined &&
      fechaFinal != undefined
    ) {
      if (this.empresa != undefined) {
        this.empresa.nit = NIT;
        this.empresa.nameCompany = nombre;
        this.empresa.phonecompany = phone;
        this.empresa.maxNumWorker = maxNumWorker;
        this.empresa.address = direccion;
        this.empresa.subscriptionEndDate = fechaFinal;
        this.empresa.email = correo;

        this.EmpresaService.modificarEmpresa(this.empresa).subscribe(
          (result) => {
            this.router.navigate(['/canela/perfil/view/:id']);
          }
        );
      }
    }
  }

  volver() {
    this.router.navigate(['/canela/perfil/view/:id']);
  }
}
