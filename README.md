# 🍳 What2Cook

What2Cook es una aplicación web moderna y minimalista desarrollada con Vue 3 y Vite cuyo objetivo es ayudar a los usuarios a decidir qué cocinar utilizando los ingredientes que ya tienen disponibles.

La aplicación busca optimizar:
- 🥦 El uso de ingredientes
- ⏱️ El tiempo de preparación
- 💸 La reducción del desperdicio de comida
- 🤔 La toma de decisiones diarias sobre qué cocinar

---

# 🚀 Tecnologías utilizadas

- Vue 3
- Composition API
- `<script setup>`
- Vite
- Node.js
- npm

---

# 📂 Estructura del proyecto

```bash
What2Cook/
──  index.html
├──  jsconfig.json
├──  LICENSE
├──  node_modules
│   ├──  @vitejs
│   │   └──  plugin-vue -> ../.pnpm/@vitejs+plugin-vue@6.0.7_vite@8.0.14_yaml@2.9.0__vue@3.5.35/node_modules/@vitejs/plugin-vue
│   ├──  pinia -> .pnpm/pinia@3.0.4_vue@3.5.35/node_modules/pinia
│   ├──  vite -> .pnpm/vite@8.0.14_yaml@2.9.0/node_modules/vite
│   ├──  vite-plugin-vue-devtools -> .pnpm/vite-plugin-vue-devtools@8.1.2_vite@8.0.14_yaml@2.9.0__vue@3.5.35/node_modules/vite-plugin-vue-devtools
│   ├──  vue -> .pnpm/vue@3.5.35/node_modules/vue
│   └──  vue-router -> .pnpm/vue-router@5.1.0_@vue+compiler-sfc@3.5.35_pinia@3.0.4_vue@3.5.35__vite@8.0.14_yaml@2.9.0__vue@3.5.35/node_modules/vue-router
├──  package-lock.json
├──  package.json
├──  pnpm-lock.yaml
├── 󰂺 README.md
├── 󰣞 src
│   ├── 󰡄 App.vue
│   ├──  assets
│   │   └── 󰕙 logo.svg
│   ├──  components
│   │   ├──  receta
│   │   │   ├── 󰡄 HeroRecetaDetail.vue
│   │   │   ├── 󰡄 RecetaIngredientes.vue
│   │   │   ├── 󰡄 RecetaPasos.vue
│   │   │   └── 󰡄 RecetaStat.vue
│   │   └──  ui
│   │       └── 󰡄 AppBadge.vue
│   ├──  main.js
│   ├──  router
│   │   └──  index.js
│   ├──  stores
│   │   ├──  recetas-detalle.json
│   │   ├──  recetas.json
│   │   ├──  RecetaStore-pruebalocal.js
│   │   └──  RecetaStore.js
│   └──  views
│       ├── 󰡄 DespensaView.vue
│       ├── 󰡄 NavbarView.vue
│       ├── 󰡄 RecetasDetailt.vue
│       └── 󰡄 RecetasFeed.vue
└──  vite.config.js

```

---

# ⚙️ Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js `v24.15.0` o superior
- npm

---

# 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/alvarowau/What2Cook.git
```

Accede al directorio:

```bash
cd What2Cook
```

Instala las dependencias:

```bash
npm install
```

---

# ▶️ Ejecutar en desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```bash
http://localhost:5173
```

---

# 🏗️ Construcción para producción

Generar build optimizada:

```bash
npm run build
```

Previsualizar la build:

```bash
npm run preview
```

---

# 🎯 Objetivos del proyecto

- Crear una experiencia moderna y minimalista
- Facilitar la elección de recetas
- Aprovechar ingredientes disponibles
- Mantener una arquitectura limpia y escalable
- Aplicar buenas prácticas en Vue 3

---

# 📌 Estado actual

El proyecto se encuentra actualmente en una fase inicial de desarrollo.

La base actual incluye:
- Configuración de Vue 3 + Vite
- Estructura mínima funcional
- Componente raíz inicial

---

# 👨‍💻 Autores

- alvaroWau
- msanchez8392

GitHub del proyecto:
https://github.com/alvarowau/What2Cook

---

# 📄 Licencia

Este proyecto está bajo la licencia MIT.
