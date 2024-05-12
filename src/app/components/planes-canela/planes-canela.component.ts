import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanesCanelaService } from 'src/app/services/planes-canela.service';
import { Plan } from 'src/app/shared/model/Entities/plan';

@Component({
  selector: 'app-planes-canela',
  templateUrl: './planes-canela.component.html',
  styleUrl: './planes-canela.component.css'
})
export class PlanesCanelaComponent implements OnInit{
  planes: Plan[] = [];

  constructor(
    private planescanelasService: PlanesCanelaService,
    private router: Router) {}

  ngOnInit() {
    this.cargarPlanes()
  }

  cargarPlanes() {
    this.planescanelasService.obtenerPlanes().subscribe({
      next: (data) => {
        console.log('planes cargados', data);
        this.planes = data;
      },
      error: (error) => {
        console.error('Error al cargar planes:', error);
      }
    })
  }

  eliminarPlan(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta plan?')){
      this.planescanelasService.eliminarPlan(id).subscribe(() => {
        this.cargarPlanes();
      })
    }
  }

  editarPlan(id: number) {
    this.router.navigate([`editar-plan/${id}`])
  }

  agregarPlan():void {
    this.router.navigate([`crear-plan`])
  }
  
}
