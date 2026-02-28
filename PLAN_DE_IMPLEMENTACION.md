# Portfolio Angular - Plan de Implementación

El objetivo de este proyecto es construir un Portfolio Web profesional y responsivo utilizando Angular, diseñado como una SPA (Single Page Application) e implementado a lo largo de un historial de commits bien estructurado para demostrar el trabajo iterativo.

## Arquitectura y Commits Propuestos

He dividido el trabajo en **10 partes** que representarán commits significativos y lógicos:

1. **`init: configuración base y entorno`**
   - Inicialización del proyecto Angular.
   - Configuración de un framework CSS (Tailwind CSS).

2. **`feat: estructura core y enrutamiento SPA`**
   - Creación de los componentes base: Menú de navegación (`Header`) y pie de página (`Footer`).
   - Configuración de Angular Router para navegar sin recargar la página.

3. **`feat: servicio de datos simulado y JSON`**
   - Creación de interfaz/modelos.
   - Implementación del servicio que inyectará los datos.

4. **`feat: sección 'Sobre mí' (Home)`**
   - Creación de la vista principal con presentación personal, perfiles y foto.

5. **`feat: sección 'Habilidades'`**
   - Diseño del componente de habilidades mostrando barras de progreso, iconos o insignias cargadas desde el servicio.

6. **`feat: sección de 'Proyectos'`**
   - Galería de proyectos en forma de tarjetas, mostrando tecnologías, descripción y enlace a GitHub.

7. **`feat: sección de 'Contacto'`**
   - Formulario de contacto visual (simulado) y botones de redes sociales.

8. **`style: pulido de diseño y perfeccionamiento responsive`**
   - Repaso general asegurando que la web se ve "perfecta" en móviles y escritorio por igual, añadiendo animaciones modernas y colores vibrantes.

9. **`docs: documentación del proyecto`**
   - Redacción del README.md explicando la instalación (`npm install`, `ng serve`) y el objetivo de la web.

10. **`build: preparación para despliegue`**
    - Verificación del empaquetado final (`ng build`) listo para subir a GitHub Pages, Vercel o Netlify.
