import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PerfilDto } from 'src/app/model/perfil-dto';
import { PerfilService } from 'src/app/service/perfil.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrl: './perfil-editar.component.css',
})
export class PerfilEditarComponent implements OnInit {
  constructor(
    private router: Router,
    private PerfilService: PerfilService,
    private route: ActivatedRoute
  ) {}

  perfil: PerfilDto | undefined;
  entradaCedula: number | undefined;
  entradanNombre: string | undefined;
  entradaDireccion: string | undefined;
  entradaTelefono: number | undefined;
  entradaNombreContacto: string | undefined;
  entradanTelContacto: number | undefined;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.PerfilService.findById(+params.get('id')!))
      )
      .subscribe((PerfilDto) => (this.perfil = PerfilDto));
  }

  editar() {
    let inputIdentification = this.entradaCedula;
    let inputName = this.entradanNombre;
    let inputAdress = this.entradaDireccion;
    let inputNumberPhone = this.entradaTelefono;
    let inputEmergencyName = this.entradaNombreContacto;
    let inputEmergencyContact = this.entradanTelContacto;

    if (
      inputIdentification != undefined &&
      inputName != undefined &&
      inputName != '' &&
      inputAdress != undefined &&
      inputAdress != '' &&
      inputNumberPhone != undefined &&
      inputEmergencyName != undefined &&
      inputEmergencyName != '' &&
      inputEmergencyContact != undefined
    ) {
      if (this.perfil != undefined) {
        this.perfil.identificacion = inputIdentification;
        this.perfil.name = inputName;
        this.perfil.address = inputAdress;
        this.perfil.numberPhone = inputNumberPhone;
        this.perfil.emergencycontactname = inputEmergencyName;
        this.perfil.emergencyContact = inputEmergencyContact;

        this.PerfilService.modificarPerfil(this.perfil).subscribe((result) => {
          this.router.navigate(['/canela/perfil/view/:id']);
        });
      }
    }
  }

  volver() {
    this.router.navigate(['/canela/perfil/view/:id']);
  }
}
