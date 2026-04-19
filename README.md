# COMANDO 99

Sitio web de COMANDO 99 desarrollado con Astro.

## Demo en vivo

- https://comando99.netlify.app/

## Tecnologías

- [Astro](https://astro.build/)
- HTML, CSS y TypeScript

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm

## Instalación

1. Clona este repositorio.
2. Instala las dependencias:

```sh
npm install
```

## Scripts disponibles

Ejecuta los comandos desde la raíz del proyecto.

| Comando                   | Descripción                                                 |
| :------------------------ | :---------------------------------------------------------- |
| `npm run dev`             | Inicia el servidor de desarrollo en `http://localhost:4321` |
| `npm run build`           | Genera la versión de producción en `dist/`                  |
| `npm run preview`         | Previsualiza la build de producción localmente              |
| `npm run astro -- --help` | Muestra ayuda del CLI de Astro                              |

## Estructura principal

```text
.
├── public/
│   ├── images/
│   │   └── galeria/
│   └── rangos/
└── src/
	├── components/
	├── layouts/
	└── pages/
```

## Desarrollo

Para iniciar en modo desarrollo:

```sh
npm run dev
```

Abre `http://localhost:4321` en tu navegador.

## Build de producción

```sh
npm run build
npm run preview
```

## Despliegue

Este proyecto se despliega en Netlify.

Demo pública:

- https://comando99.netlify.app/
