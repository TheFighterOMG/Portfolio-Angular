import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  skills: any[] = [];

  ngOnInit(): void {
    this.portfolioService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }
}
