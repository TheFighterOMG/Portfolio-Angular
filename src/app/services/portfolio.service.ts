import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private http = inject(HttpClient);

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
    return this.http.get<any>('assets/data.json').pipe(
      map(data => data.skills)
    );
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any>('assets/data.json').pipe(
      map(data => data.projects)
    );
  }
}
