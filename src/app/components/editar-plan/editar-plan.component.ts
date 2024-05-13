import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanesCanelaService } from 'src/app/services/planes-canela.service';
import { Plan } from 'src/app/shared/model/Entities/plan';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrl: './editar-plan.component.css'
})
export class EditarPlanComponent implements OnInit{
  plan: Plan = new Plan(0, '','',0,0,'','');

  constructor(private route: ActivatedRoute, private router: Router, private planeslanelaService: PlanesCanelaService) {}
  
  ngOnInit(): void {
    const idPlan = Number(this.route.snapshot.paramMap.get('id'));
    this.planeslanelaService.obtenerPlanPorId(idPlan).subscribe({
      next: (data) => {
        this.plan = data;
      },
      error: (err) => {
        console.error(`No se encontró ninguna Plan con el ID ${idPlan}`, err);
        this.router.navigate(['/planes-canela']);
      }
    });
  }

  guardarCambios(): void {
    this.planeslanelaService.editarPlan(this.plan).subscribe({
      next: (data) => {
        console.log('Plan actualizada correctamente:', data);
        this.router.navigate(['/planes-canela']);
      },
      error: (err) => {
        console.error('Error al actualizar la plan:', err)
      }
    })
  }

  volverAtras() {
    this.router.navigate(['/planes-canela']);
  }
}
