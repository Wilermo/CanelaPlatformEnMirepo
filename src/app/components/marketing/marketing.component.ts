import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilDto } from 'src/app/model/perfil-dto';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-marketing',

  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css',
})
export class MarketingComponent implements OnInit {
  constructor(
    private router: Router,
    private MarketingService: PerfilService
  ) {}

  usuarios: PerfilDto[] | undefined;
  nuevoStatus: string | undefined;

  ngOnInit(): void {}

  onChange(value: string) {
    this.nuevoStatus = value;
  }
}
