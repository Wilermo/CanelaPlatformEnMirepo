import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioPermisoDto } from 'src/app/model/usuario-permiso-dto';
import { PermisosUsuarioService } from 'src/app/service/permisos-usuario.service';
import { User } from 'src/app/shared/model/auth/user';
import { UserService } from '../../shared/model/user.service';

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
  roles: string[] | undefined;
  rolesPorUsuario: { [key: string]: string[] } = {};

  username = localStorage.getItem('username');
  ngOnInit(): void {
    this.permisosUsuarioService.findAllUsers().subscribe((users) => {
      this.usuarios = users;
      this.usuarios.forEach((user) => {
        this.rolesPorUsuario[user.username] = user.roles;
      });
    });
  }

  enableMarketing(id: number) {}
  enableFinanzas(id: number) {}
  enableServer(id: number) {}

  public handleCheckboxChange(
    event: Event,
    username: string,
    rol: string
  ): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const isChecked = target.checked;
      this.actualizarRoles(username, rol, isChecked);
    } else {
      // Manejar el caso en que target es null (si es necesario)
      console.error('El target es null en el evento del checkbox.');
    }
  }

  actualizarRoles(username: string, rol: string, isChecked: boolean): void {
    // Verificar si el usuario ya tiene este rol

    if (isChecked) {
      this.rolesPorUsuario[username].push(rol);
    }
    // Guardar los roles actualizados
    console.log(
      `Roles actualizados para el usuario con ID :` + this.username + this.roles
    );
  }

  /*
  enviarDatosRoles(): void {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Datos que se envían:', this.nuevoUsuarioAuth);

      this.userService
        .createUser(this.nuevoUsuarioAuth, this.nuevoUsuarioAuth.role, token)
        .subscribe({
          next: (data) => {
            console.log('Respuesta recibida:', data);
            this.router.navigate(['/canela/permisos']);
          },
          error: (err) => {
            console.error('Error al enviar datos:', err);
          },
        });
    } else {
      console.error('No se encontró el token de autenticación');
    }
  }
  */
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
