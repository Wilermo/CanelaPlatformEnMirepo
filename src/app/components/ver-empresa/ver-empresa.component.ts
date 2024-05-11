import { Component, OnInit } from '@angular/core';
import { FacturacionService } from 'src/app/service/facturacion.service';
import { EmpresaService } from 'src/app/service/empresa-editar.service';
import { VerEmpresa } from 'src/app/model/ver-empresa';
import { EmpresaEditar } from 'src/app/model/empresa-editar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-ver-empresa',
  templateUrl: './ver-empresa.component.html',
  styleUrl: './ver-empresa.component.css',
})
export class VerEmpresaComponent {
  constructor(
    private router: Router,
    private FacturacionService: FacturacionService,
    private EmpresaService: EmpresaService,
    private route: ActivatedRoute
  ) {}

  empresa: EmpresaEditar | undefined;

  facturas: VerEmpresa[] | undefined;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.EmpresaService.findById(+params.get('id')!))
      )
      .subscribe((EmpresaEditar) => (this.empresa = EmpresaEditar));

    this.FacturacionService.getEmpresas().subscribe(
      (data) => {
        console.log(data);
        this.facturas = data;
      },
      (error) => {
        console.error('Ocurrió un error al obtener los planes:', error);
      }
    );
  }

  volver() {
    this.router.navigate(['/canela/suscripciones']);
  }
}
