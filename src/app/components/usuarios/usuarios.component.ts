import { Component } from '@angular/core';
import { RegistroUsuarioService } from 'src/app/service/registro-usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioPermisoDto } from 'src/app/model/usuario-permiso-dto';
import { UsuarioRegistroDto } from 'src/app/model/usuario-registro-dto';
import { User } from 'src/app/shared/model/auth/user';
import { UserService } from '../../shared/model/user.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  constructor(
    private registroUsuarioService: RegistroUsuarioService,
    private router: Router,
    private userService: UserService
  ) { }

  nuevoUsuario: UsuarioRegistroDto | undefined;
  nuevoUsuarioAuth: User = new User();

  ngOnInit(): void { }

  pantallaPlanes() {
    this.router.navigate(['/canela/planes']);
  }

  pantallaPermisos() {
    this.router.navigate(['/canela/permisos']);
  }
  /*
  guardar() {
    let primerNombre = (<HTMLInputElement>(
      document.getElementById('entradaprimerNombre')
    )).value;
    let primerApellido = (<HTMLInputElement>(
      document.getElementById('entradaprimerApellido')
    )).value;
    let cedula = parseInt(
      (<HTMLInputElement>document.getElementById('entradacedula')).value
    );

    let correo = (<HTMLInputElement>document.getElementById('entradacorreo'))
      .value;

    let rol = (<HTMLInputElement>document.getElementById('entradarol')).value;

    if (
      primerNombre != undefined &&
      primerNombre != '' &&
      primerApellido != undefined &&
      primerApellido != '' &&
      correo != undefined &&
      correo != '' &&
      cedula != undefined &&
      rol != '' &&
      rol != undefined
    ) {
      this.nuevoUsuario = new UsuarioRegistroDto(
        primerNombre,
        primerApellido,
        cedula,
        correo,
        rol
      );
      this.registroUsuarioService
        .guardarUsuario(this.nuevoUsuario)
        .subscribe((result) => {});
    } else {
    }
  }
*/
  enviarDatos(): void {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Datos que se envían:', this.nuevoUsuario);
      this.userService.createUser(this.nuevoUsuarioAuth, this.nuevoUsuarioAuth.role, token).subscribe({
        next: (data) => {
          console.log('Respuesta recibida:', data);
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error('Error al enviar datos:', err);
        }
      });

    } else {
      console.error('No se encontró el token de autenticación');
      this.router.navigate(['/login']);
    }
  }
}
