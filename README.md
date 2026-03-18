# Portfolio Profesional Angular

**Enlace a la demo:** [https://thefighteromg.github.io/Portfolio-Angular/](https://thefighteromg.github.io/Portfolio-Angular/)

Bienvenido/a al repositorio de mi Portfolio Profesional, creado como proyecto final para demostrar habilidades como desarrollador de aplicaciones web. 

Este proyecto simula un encargo real para construir una carta de presentación al mundo utilizando tecnologías modernas. Está configurado como una **Single Page Application (SPA)** escalable y responsiva.

## 🚀 Tecnologías Utilizadas

*   **Framework Core:** Angular 20 (Arquitectura Standalone)
*   **Estilos y Diseño:** Tailwind CSS (enfocado en Mobile-First y Responsive Design)
*   **Enrutamiento:** Angular Router
*   **Gestión de Datos:** `HttpClient` consumiendo un archivo estático `data.json`

## ✨ Características Principales

*   **Arquitectura Moderna:** Uso nativo de *Standalone Components* (sin módulos heredados), el nuevo flujo de control (`@for`, `@if`), e inyección de dependencias funcional (`inject()`).
*   **Sistema de Datos Desacoplado:** Siguiendo las mejores prácticas, la información de Habilidades y Proyectos no está "quemada" (hardcodeada) en el HTML. Se consume dinámicamente mediante un servicio (`PortfolioService`) simulando la respuesta de una API REST.
*   **Diseño 100% Responsivo:** Interfaz adaptada a cualquier dispositivo, con menú hamburguesa para móviles y reestructuración de *grids* en escritorio.
*   **Componentes Modulares:** Estructura limpia separando responsabilidades: `Home`, `Skills`, `Projects`, `Contact`, `Header` y `Footer`.

## 🛠️ Instalación y Ejecución Local

Para correr este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio**
    ```bash
    git clone https://github.com/TheFighterOMG/Portfolio-Angular.git
    cd Portfolio-Angular
    ```

2.  **Instala las dependencias**
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo**
    ```bash
    ng serve
    ```
    *También puedes usar `npm start`.*

4.  **Abre la aplicación**
    Navega en tu navegador web favorito a: `http://localhost:4200/`

## 📦 Construcción para Producción

Para compilar el proyecto y prepararlo para el despliegue:

```bash
ng build
```
Los archivos optimizados se generarán en la carpeta `dist/portfolio-web`. Estos son los archivos que se suben a servidores estáticos como Vercel, Netlify o GitHub Pages.
