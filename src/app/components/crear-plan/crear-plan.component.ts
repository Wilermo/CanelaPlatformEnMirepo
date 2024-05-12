import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanesCanelaService } from 'src/app/services/planes-canela.service';
import { Plan } from 'src/app/shared/model/Entities/plan';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrl: './crear-plan.component.css'
})
export class CrearPlanComponent implements OnInit{
  plan: Plan = new Plan(0, '','',0,0,'','Active');

  constructor(private route: ActivatedRoute, private router: Router, private planeslanelaService: PlanesCanelaService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agregarPlan() {
    this.planeslanelaService.agregarPlan(this.plan).subscribe({
      next: (data) => {
        console.log('Plan creado correctamente:', data);
        this.router.navigate(['/planes-canela']);
      },
      error: (err) => {
        console.error('Error al crear la plan:', err)
      }
    })
  }
  
  volverAtras() {
    this.router.navigate(['/planes-canela']);
  }

}
