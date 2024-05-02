import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketingDto } from 'src/app/model/marketing-dto';
import { MarketingService } from 'src/app/service/marketing.service';

@Component({
  selector: 'app-marketing',

  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css',
})
export class MarketingComponent implements OnInit {
  constructor(
    private router: Router,
    private MarketingService: MarketingService
  ) {}

  marketing: MarketingDto[] | undefined;

  ngOnInit(): void {}
}
