
# Inebal

---

## Tecnologías

| Herramienta | Versión | Uso |
|---|---|---|
| [React](https://react.dev) | 19 | Framework UI |
| [TypeScript](https://www.typescriptlang.org) | 5.8 | Tipado estático |
| [Vite](https://vitejs.dev) | 7 | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos utilitarios |
| [GSAP](https://gsap.com) | 3 | Animaciones |
| [react-i18next](https://react.i18next.com) | 15 | Internacionalización (i18n) |
| [Lucide React](https://lucide.dev) | — | Iconografía |

---

## Características

- Multiidioma (ES / EN / CA) con detección automática del navegador via `i18next-browser-languagedetector`
- Animaciones fluidas con GSAP
- Diseño responsive orientado a móvil y escritorio
- SEO configurado con meta tags Open Graph y Twitter Card
- Despliegue continuo en Vercel desde la rama `master`

---

## Instalación local

Requisitos previos: **Node.js 18+** y **npm**.

```bash
# 1. Clonar el repositorio
git clone https://github.com/TAMDGroup25/inebal-web.git
cd inebal-web

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Compilación de producción (tsc + vite build)
npm run preview   # Previsualización del build de producción
npm run lint      # Análisis estático con ESLint
```

---

## Estructura del proyecto

```
inebal-web/
├── public/             # Assets estáticos (imágenes, favicon, og-image…)
├── src/
│   ├── assets/         # Recursos importados en el código
│   ├── components/     # Componentes React reutilizables
│   ├── locales/        # Archivos de traducción (es, en, ca)
│   ├── App.tsx         # Componente raíz
│   └── main.tsx        # Punto de entrada
├── index.html
├── vite.config.ts
├── tailwind.config.*
└── tsconfig.json
```

---

## Despliegue

El proyecto está desplegado en **[Vercel](https://vercel.com)** con CI/CD automático. Cada push a `master` genera un nuevo deploy de producción.

Para desplegar en tu propia cuenta de Vercel:

```bash
npm run build
# Sube el contenido de /dist a tu plataforma de hosting preferida
```

---

## Sobre Inebal

Inebal es una empresa con sede en **Manacor, Mallorca**, que ofrece servicios profesionales de:

- ⚡ Instalaciones eléctricas
- ❄️ Climatización (aire acondicionado, bombas de calor)
- 🔧 Fontanería
- 🛠️ Mantenimiento de instalaciones para hogares y empresas

---

## Licencia

Proyecto privado — © TAMDGroup25. Todos los derechos reservados.
