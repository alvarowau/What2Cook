<script setup>
import RecetaStat from "@/components/receta/RecetaStat.vue";
import AppBadge from "@/components/ui/AppBadge.vue";

defineProps({
  receta: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="hero">
    <!-- IMAGE SIDE -->

    <div class="hero-image-container">
      <img :src="receta.image" :alt="receta.title" class="hero-image" />

      <div class="image-overlay"></div>
    </div>

    <!-- CONTENT SIDE -->

    <div class="hero-content">
      <!-- TOP -->

      <div class="hero-top">
        <div class="badges">
          <AppBadge
            v-if="receta.glutenFree"
            text="Gluten Free"
            variant="blue"
          />

          <AppBadge
            v-if="receta.dairyFree"
            text="Dairy Free"
            variant="purple"
          />

          <AppBadge
            v-if="receta.vegetarian"
            text="Vegetarian"
            variant="green"
          />

          <AppBadge v-if="receta.vegan" text="Vegan" variant="orange" />
        </div>

        <h1 class="titulo">
          {{ receta.title }}
        </h1>
      </div>

      <!-- STATS -->

      <div class="stats">
        <RecetaStat
          icon="⏱"
          :value="receta.readyInMinutes"
          label="Tiempo"
          variant="orange"
        />

        <RecetaStat
          icon="👥"
          :value="receta.servings"
          label="Raciones"
          variant="blue"
        />

        <RecetaStat
          icon="❤️"
          :value="receta.aggregateLikes"
          label="Likes"
          variant="red"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero {
  display: grid;

  grid-template-columns:
    520px
    1fr;

  min-height: 520px;

  border-radius: 40px;

  overflow: hidden;

  background: linear-gradient(145deg, #fffaf5, #fff6ee);

  border: 1px solid #f1dfc9;

  box-shadow:
  0 25px 70px rgba(180, 83, 9, 0.08);

  position: relative;

  margin-bottom: 3rem;
}

/* IMAGE */

.hero-image-container {
  position: relative;

  overflow: hidden;
}

.hero-image {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition:
    transform 0.6s ease,
    filter 0.4s ease;
}

.hero:hover .hero-image {
  transform: scale(1.06);

  filter: brightness(1.03);
}

.image-overlay {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    to top,
    rgba(120, 53, 15, 0.35),
    rgba(15, 23, 42, 0.05)
  );
}

/* CONTENT */

.hero-content {
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding: 4rem 3.5rem;

  position: relative;

  overflow: hidden;
}

/* DECORATION */

.hero-content::before {
  content: "";

  position: absolute;

  width: 400px;
  height: 400px;

  border-radius: 50%;

  background: radial-gradient(rgba(249, 115, 22, 0.10), transparent);

  top: -180px;
  right: -120px;
}

/* TOP */

.hero-top {
  position: relative;

  z-index: 2;
}

/* BADGES */

.badges {
  display: flex;

  flex-wrap: wrap;

  gap: 0.8rem;

  margin-bottom: 2rem;
}

/* TITLE */

.titulo {
  font-size: 4rem;

  line-height: 0.95;

  font-weight: 800;

  color: #1f2937;

  letter-spacing: -3px;

  max-width: 700px;
}

/* STATS */

.stats {
  display: flex;

  flex-wrap: wrap;

  gap: 1.2rem;

  position: relative;

  z-index: 2;
}

/* RESPONSIVE */

@media (max-width: 1200px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-image-container {
    height: 420px;
  }

  .titulo {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 2rem 1.5rem;
  }

  .titulo {
    font-size: 2.3rem;

    letter-spacing: -2px;
  }

  .hero-image-container {
    height: 300px;
  }

  .stats {
    gap: 0.8rem;
  }
}
</style>
