import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioPermisoDto } from 'src/app/model/usuario-permiso-dto';
import { PermisosUsuarioService } from 'src/app/service/permisos-usuario.service';

@Component({
  selector: 'app-permisos-usuario',
  templateUrl: './permisos-usuario.component.html',
  styleUrls: ['./permisos-usuario.component.css'],
})
export class PermisosUsuarioComponent implements OnInit {
  constructor(
    private router: Router,
    private permisosUsuarioService: PermisosUsuarioService
  ) {}

  usuarios: UsuarioPermisoDto[] | undefined;

  ngOnInit(): void {
    this.permisosUsuarioService
      .findAllUsers()
      .subscribe((users) => (this.usuarios = users));
  }

  enableMarketing(id: number) {}
  enableFinanzas(id: number) {}
  enableServer(id: number) {}

  login() {
    this.router.navigate(['/']);
  }

  planes() {
    this.router.navigate(['/canela/planes']);
  }

  nuevoUsuario() {
    this.router.navigate(['canela/usuarios']);
  }
}
