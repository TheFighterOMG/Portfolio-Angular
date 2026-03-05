import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  personalData: any;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.personalData = this.portfolioService.getPersonalData();
  }
}
