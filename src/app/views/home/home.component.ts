import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  personalData: any;

  ngOnInit(): void {
    this.personalData = this.portfolioService.getPersonalData();
  }
}
