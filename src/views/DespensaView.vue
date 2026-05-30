<script setup>
import { ref } from "vue";

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
</script>

<template>
  <section class="despensa">

    <div class="header">

      <h1>Mi Despensa</h1>

      <p>
        Selecciona los ingredientes que tienes disponibles.
      </p>

    </div>

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

/* GRID */

.ingredientes-grid {
  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 1.5rem;
}

/* CARD */

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

/* ESTADO SELECCIONADO */

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

/* RESPONSIVE */

@media (max-width: 768px) {
  .despensa {
    padding: 2rem 1rem;
  }

  .header h1 {
    font-size: 2.2rem;
  }
}
</style>
