<script setup>
import { onMounted } from "vue";

import { useRecetaStore } from "@/stores/RecetaStore";

const recetaStore = useRecetaStore();

onMounted(async () => {
  await recetaStore.cargarRecetas();
});
</script>

<template>
  <section class="recetas-section">
    <!-- HEADER -->

    <div class="header">
      <h1 class="titulo">Explorar recetas</h1>

      <p class="subtitulo">
        Descubre recetas organizadas en una interfaz limpia y moderna.
      </p>
    </div>

    <!-- LOADING -->

    <div v-if="recetaStore.cargandoRecetas" class="estado-container">
      <h3 class="estado-texto">Cargando recetas...</h3>
    </div>

    <!-- ERROR -->

    <div v-else-if="recetaStore.error" class="estado-container">
      <h3 class="estado-texto">
        {{ recetaStore.error }}
      </h3>
    </div>

    <!-- EMPTY -->

    <div v-else-if="!recetaStore.recetas.length" class="estado-container">
      <h3 class="estado-texto">No se encontraron recetas</h3>
    </div>

    <!-- RECETAS -->

    <div v-else class="container-recetas">
      <ul class="recetas-list">
        <li
          v-for="receta in recetaStore.recetas"
          :key="receta.id"
          class="receta-card"
        >
          <RouterLink class="receta-link" :to="`/recetas/${receta.id}`">
            <img :src="receta.image" :alt="receta.title" class="img-receta" />

            <div class="contenido-card">
              <h4>
                {{ receta.title }}
              </h4>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* PAGE */

.recetas-section {
  min-height: 100vh;

  background-color: #eef2f7;

  padding: 3rem 2rem;
}

/* HEADER */

.header {
  text-align: center;

  margin-bottom: 3rem;
}

.titulo {
  font-size: 3rem;

  font-weight: 700;

  color: #111827;

  margin-bottom: 0.8rem;

  letter-spacing: -1px;
}

.subtitulo {
  font-size: 1rem;

  color: #6b7280;

  max-width: 650px;

  margin: 0 auto;

  line-height: 1.6;
}

/* STATES */

.estado-container {
  display: flex;

  justify-content: center;

  align-items: center;

  padding: 4rem 0;
}

.estado-texto {
  color: #6b7280;

  font-weight: 500;
}

/* CONTAINER */

.container-recetas {
  max-width: 1400px;

  margin: 0 auto;

  background-color: #ffffff;

  border-radius: 28px;

  padding: 2.5rem;

  border: 1px solid #dbe3ec;

  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06);
}

/* GRID */

.recetas-list {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;

  list-style: none;

  padding: 0;

  margin: 0;
}

/* CARD */

.receta-card {
  background-color: #fcfaf8;

  text-align: center;

  border-radius: 20px;

  overflow: hidden;

  border: 1px solid #e5e7eb;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.receta-card:hover {
  transform: translateY(-5px);

  border-color: #cbd5e1;

  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
}

/* LINK */

.receta-link {
  display: block;

  text-decoration: none;

  color: inherit;
}

/* IMAGE */

.img-receta {
  width: 100%;

  height: 170px;

  object-fit: cover;

  display: block;
}

/* CONTENT */

.contenido-card {
  padding: 1.2rem;
}

.contenido-card h4 {
  font-size: 1rem;

  font-weight: 600;

  color: #111827;

  line-height: 1.5;

  margin: 0;
}

/* TABLET */

@media (max-width: 1100px) {
  .recetas-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* MOBILE */

@media (max-width: 768px) {
  .recetas-section {
    padding: 2rem 1rem;
  }

  .recetas-list {
    grid-template-columns: 1fr;
  }

  .container-recetas {
    padding: 1.5rem;
  }

  .titulo {
    font-size: 2.2rem;
  }

  .subtitulo {
    font-size: 0.95rem;
  }
}
</style>
