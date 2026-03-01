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

  getSkills(): Observable<any[]> {
    return of([]);
  }

  getProjects(): Observable<any[]> {
    return of([]);
  }
}
