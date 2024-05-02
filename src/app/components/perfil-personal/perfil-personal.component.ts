import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilDto } from 'src/app/model/perfil-dto';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-perfil-personal',
  templateUrl: './perfil-personal.component.html',
  styleUrl: './perfil-personal.component.css',
})
export class PerfilPersonalComponent implements OnInit {
  constructor(private router: Router, private PerfilService: PerfilService) {}

  cedula: string | undefined;
  nombre: string | undefined;
  correo: string | undefined;
  direccion: number | undefined;
  contacto: string | undefined;
  contraseña: string | undefined;

  perfil: PerfilDto | undefined;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  editarInformacion() {
    this.router.navigate(['/canela/plan-editar']);
  }
}
