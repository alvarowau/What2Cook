<script setup>
import { computed, ref } from "vue";
import { useRecetaStore } from "@/stores/RecetaStore";

const recetaStore = useRecetaStore();

const ingredientes = ref([
  { id: 1, nombre: "Pollo", seleccionado: false, emoji: "🍗" },
  { id: 2, nombre: "Arroz", seleccionado: false, emoji: "🍚" },
  { id: 3, nombre: "Tomate", seleccionado: false, emoji: "🍅" },
  { id: 4, nombre: "Cebolla", seleccionado: false, emoji: "🧅" },
  { id: 5, nombre: "Leche", seleccionado: false, emoji: "🥛" },
  { id: 6, nombre: "Huevos", seleccionado: false, emoji: "🥚" },
  { id: 7, nombre: "Queso", seleccionado: false, emoji: "🧀" },
  { id: 8, nombre: "Patata", seleccionado: false, emoji: "🥔" },
  { id: 9, nombre: "Salmón", seleccionado: false, emoji: "🐟" },
  { id: 10, nombre: "Zanahoria", seleccionado: false, emoji: "🥕" },
  { id: 11, nombre: "Pimiento", seleccionado: false, emoji: "🫑" },
  { id: 12, nombre: "Ajo", seleccionado: false, emoji: "🧄" },
  { id: 13, nombre: "Pasta", seleccionado: false, emoji: "🍝" },
  { id: 14, nombre: "Limón", seleccionado: false, emoji: "🍋" },
  { id: 15, nombre: "Champiñones", seleccionado: false, emoji: "🍄‍🟫" },
]);

function toggleIngrediente(ingrediente) {
  ingrediente.seleccionado = !ingrediente.seleccionado;
}

const ingredientesSeleccionados = computed(() => {
  return ingredientes.value
    .filter((ingrediente) => ingrediente.seleccionado)
    .map((ingrediente) => ingrediente.nombre);
});

async function buscarRecetas() {
  await recetaStore.buscarPorIngredientes(
    ingredientesSeleccionados.value
  );
}
</script>

<template>
  <section class="despensa">

    <!-- HEADER -->

    <div class="header">

      <h1>
        Mi Despensa
      </h1>

      <p>
        Selecciona los ingredientes que tienes disponibles.
      </p>

    </div>

    <!-- INGREDIENTES -->

    <div class="ingredientes-grid">

      <article
        v-for="ingrediente in ingredientes"
        :key="ingrediente.id"
        class="ingrediente-card"
        :class="{ seleccionado: ingrediente.seleccionado }"
        @click="toggleIngrediente(ingrediente)"
      >

        <span class="emoji">
          {{ ingrediente.emoji }}
        </span>

        <h3>
          {{ ingrediente.nombre }}
        </h3>

      </article>

    </div>

    <!-- BOTÓN -->

    <button
      @click="buscarRecetas"
      :disabled="!ingredientesSeleccionados.length"
    >
      Buscar recetas
    </button>

    <!-- LOADING -->

    <div
      v-if="recetaStore.cargandoRecetas"
      class="estado"
    >
      Buscando recetas...
    </div>

    <!-- ERROR -->

    <div
      v-else-if="recetaStore.error"
      class="estado"
    >
      {{ recetaStore.error }}
    </div>

    <!-- RESULTADOS -->

    <div
      v-else-if="recetaStore.resultadosDespensa.length"
      class="resultados"
    >

      <h2>
        {{ recetaStore.resultadosDespensa.length }}
        recetas encontradas
      </h2>

      <div class="container-recetas">

        <ul class="recetas-list">

          <li
            v-for="receta in recetaStore.resultadosDespensa"
            :key="receta.id"
            class="receta-card"
          >

            <RouterLink
              class="receta-link"
              :to="`/recetas/${receta.id}`"
            >

              <img
                :src="receta.image"
                :alt="receta.title"
                class="img-receta"
              />

              <div class="contenido-card">

                <h4>
                  {{ receta.title }}
                </h4>

              </div>

            </RouterLink>

          </li>

        </ul>

      </div>

    </div>

  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.despensa {
  min-height: 100vh;

  padding: 3rem 2rem;

  background-color: #fff8f1;
}

/* HEADER */

.header {
  text-align: center;

  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3rem;

  color: #2b2d42;

  margin-bottom: 0.5rem;
}

.header p {
  color: #6b7280;

  font-size: 1rem;
}

/* INGREDIENTES */

.ingredientes-grid {
  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 1.5rem;
}

.ingrediente-card {
  background-color: white;

  border: 2px solid #ececec;

  border-radius: 20px;

  padding: 2rem;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 1rem;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.ingrediente-card:hover {
  transform: translateY(-4px);

  border-color: #ff7a18;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.ingrediente-card.seleccionado {
  background-color: #ff7a18;

  border-color: #ff7a18;

  color: white;
}

.ingrediente-card.seleccionado h3 {
  color: white;
}

.emoji {
  font-size: 3rem;
}

.ingrediente-card h3 {
  margin: 0;

  color: #2b2d42;

  text-align: center;

  font-size: 1.1rem;
}

/* BOTÓN */

button {
  display: block;

  margin: 2rem auto 3rem auto;

  padding: 1rem 2rem;

  border: none;

  border-radius: 14px;

  background-color: #ff7a18;

  color: white;

  font-size: 1rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #ea6a0c;

  transform: translateY(-2px);
}

button:disabled {
  opacity: 0.6;

  cursor: not-allowed;
}

/* ESTADOS */

.estado {
  display: flex;

  justify-content: center;

  align-items: center;

  padding: 3rem 0;

  color: #6b7280;

  font-weight: 500;
}

/* RESULTADOS */

.resultados {
  margin-top: 4rem;
}

.resultados h2 {
  text-align: center;

  font-size: 2rem;

  color: #111827;

  margin-bottom: 2rem;
}

/* CONTENEDOR */

.container-recetas {
  max-width: 1400px;

  margin: 0 auto;

  background-color: #ffffff;

  border-radius: 28px;

  padding: 2.5rem;

  border: 1px solid #dbe3ec;

  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06);
}

/* GRID RECETAS */

.recetas-list {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;

  list-style: none;

  padding: 0;

  margin: 0;
}

/* CARD RECETA */

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

.receta-link {
  display: block;

  text-decoration: none;

  color: inherit;
}

.img-receta {
  width: 100%;

  height: 170px;

  object-fit: cover;

  display: block;
}

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

/* RESPONSIVE */

@media (max-width: 1100px) {
  .recetas-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .despensa {
    padding: 2rem 1rem;
  }

  .header h1 {
    font-size: 2.2rem;
  }

  .recetas-list {
    grid-template-columns: 1fr;
  }

  .container-recetas {
    padding: 1.5rem;
  }
}
</style>
