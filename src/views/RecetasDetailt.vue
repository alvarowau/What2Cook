<script setup>
import { watch, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import { useRecetaStore } from '@/stores/RecetaStore';

import HeroRecetaDetail from '@/components/receta/HeroRecetaDetail.vue';
import RecetaIngredientes from '@/components/receta/RecetaIngredientes.vue';
import RecetaPasos from '@/components/receta/RecetaPasos.vue';

const route = useRoute();

const recetaStore = useRecetaStore();

/*
  Observamos el parámetro de la ruta.

  Esto es mejor que usar únicamente onMounted,
  porque si cambia el ID en la URL,
  el componente reaccionará automáticamente.
*/

watch(
  () => route.params.id,

  async (nuevoId) => {
    if (!nuevoId) {
      return;
    }

    await recetaStore.cargarRecetaPorId(nuevoId);
  },

  {
    immediate: true,
  }
);

/*
  Limpiamos el estado cuando salimos
  de la página del detalle.
*/

onUnmounted(() => {
  recetaStore.limpiarRecetaActual();
});
</script>

<template>
  <section class="detalle-section">

    <!-- LOADING -->

    <div
      v-if="recetaStore.cargandoReceta"
      class="estado"
    >
      <h2>
        Cargando receta...
      </h2>
    </div>

    <!-- ERROR -->

    <div
      v-else-if="recetaStore.error"
      class="estado"
    >
      <h2>
        {{ recetaStore.error }}
      </h2>
    </div>

    <!-- DETAIL -->

    <div
      v-else-if="recetaStore.recetaActual"
      class="detalle-container"
    >

      <!-- HERO -->

      <HeroRecetaDetail
        :receta="recetaStore.recetaActual"
      />

      <!-- CONTENT -->

      <div class="content-section">

        <!-- INGREDIENTES -->

        <RecetaIngredientes
          :ingredientes="
            recetaStore.recetaActual.extendedIngredients ?? []
          "
        />

        <!-- PASOS -->

        <RecetaPasos
          :pasos="
            recetaStore.recetaActual.analyzedInstructions?.[0]?.steps ?? []
          "
        />

      </div>

    </div>

  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* PAGE */

.detalle-section {
  min-height: 100vh;

  padding:
    3rem
    2rem;

  background:
    linear-gradient(
      180deg,
      #fffaf5,
      #fff6ee
    );
}

/* STATES */

.estado {
  display: flex;

  align-items: center;

  justify-content: center;

  min-height: 60vh;

  color: #6b7280;

  text-align: center;
}

.estado h2 {
  font-size: 1.2rem;

  font-weight: 600;
}

/* CONTAINER */

.detalle-container {
  max-width: 1400px;

  margin: 0 auto;
}

/* CONTENT */

.content-section {
  display: grid;

  grid-template-columns:
    360px
    1fr;

  gap: 2rem;

  align-items: start;
}

/* RESPONSIVE */

@media (max-width: 1100px) {
  .content-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .detalle-section {
    padding:
      2rem
      1rem;
  }

  .content-section {
    gap: 1.5rem;
  }
}
</style>
