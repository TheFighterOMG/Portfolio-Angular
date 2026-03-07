import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private personalData = {
    name: "Daniel Gómez Ortiz",
    title: "Desarrollador de Aplicaciones Web / Junior",
    description: "Soy un apasionado de la tecnología con gran capacidad de autoaprendizaje y adaptación tecnológica. Me encanta construir aplicaciones web que aportan valor, con código limpio y una gran experiencia de usuario.",
    email: "dnlgmzrtz@gmail.com",
    github: "https://github.com/DanielG-git",
    linkedin: "https://www.linkedin.com/in/daniel-gómez-ortiz/"
  };

  constructor() { }

  getPersonalData() {
    return this.personalData;
  }

  private skills = [
    { name: "Desarrollo Frontend (Angular 20, Tailwind CSS)", level: 85, icon: "💻" },
    { name: "Desarrollo Backend (Java, Spring Boot)", level: 80, icon: "☕" },
    { name: "Bases de Datos Relacionales (MySQL, PostgreSQL)", level: 75, icon: "🗄️" },
    { name: "Control de Versiones (Git, GitHub)", level: 90, icon: "🔀" },
    { name: "Metodologías Ágiles (Scrum)", level: 80, icon: "🔄" }
  ];

  getSkills(): Observable<any[]> {
    return of(this.skills);
  }

  private projects = [
    {
      title: "DocuFlow - Gestión Documental",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Angular 20", "Tailwind CSS"],
      github: "https://github.com/DanielG-git"
    },
    {
      title: "API Gestión Hospitalaria",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/DanielG-git"
    },
    {
      title: "E-Commerce Backend",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Java", "Spring Data JPA", "PostgreSQL"],
      github: "https://github.com/DanielG-git"
    }
  ];

  getProjects(): Observable<any[]> {
    return of(this.projects);
  }
}
