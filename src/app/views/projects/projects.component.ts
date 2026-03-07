import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  projects: any[] = [];

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
