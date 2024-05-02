import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/model/slidebar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css'],
})
export class SlidebarComponent implements OnInit {
  nombreEmpresa: string = '';
  modulos: { icono: string; nombre: string }[] = [];
  constructor(private sidebarService: SidebarService, private router: Router) {}

  ngOnInit(): void {
    const hamBurger = document.querySelector('.toggle-btn') as HTMLElement;

    hamBurger.addEventListener('click', () => {
      const sidebar = document.querySelector('#sidebar') as HTMLElement;

      sidebar.classList.toggle('expand');
    });

    // Obtener los módulos
    this.sidebarService.obtenerModulos().subscribe(
      (modulos: any[]) => {
        this.modulos = modulos;
      },
      (error) => {
        console.error('Error al obtener los módulos:', error);
      }
    );
  }

  pantallaPlanes() {
    this.router.navigate(['/canela/planes']);
  }

  pantallaPermisos() {
    this.router.navigate(['/canela/permisos']);
  }

  pantallaMarketing() {
    this.router.navigate(['/canela/marketing']);
  }

  pantallaSuscripciones() {
    this.router.navigate(['/canela/suscripciones']);
  }
}
