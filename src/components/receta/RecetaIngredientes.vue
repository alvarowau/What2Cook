<script setup>
defineProps({
  ingredientes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="ingredientes-card">

    <!-- BACKGROUND ICON -->

    <div class="ingredientes-bg-icon">
      🛒
    </div>

    <!-- HEADER -->

    <div class="ingredientes-header">

      <div class="ingredientes-info">

        <p class="ingredientes-mini-title">
          Todo lo necesario
        </p>

        <h2 class="section-title">
          Ingredientes
        </h2>

      </div>

      <div class="ingredientes-count">

        <span class="count-number">
          {{ ingredientes.length }}
        </span>

        <span class="count-label">
          items
        </span>

      </div>

    </div>

    <!-- LIST -->

    <ul class="ingredientes-list">

      <li
        v-for="ingrediente in ingredientes"
        :key="ingrediente.id"
        class="ingrediente-item"
      >

        <span class="ingrediente-bullet"></span>

        <span class="ingrediente-text">
          {{ ingrediente.original }}
        </span>

      </li>

    </ul>

  </div>
</template>

<style scoped>
.ingredientes-card {
  position: relative;

  overflow: hidden;

  background:
    linear-gradient(
      180deg,
      #fffaf5,
      #fff6ee
    );

  border-radius: 32px;

  padding: 2.4rem;

  border: 1px solid #f1dfc9;

  box-shadow:
    0 18px 45px rgba(15, 23, 42, 0.05);

  height: fit-content;
}

/* BACKGROUND ICON */

.ingredientes-bg-icon {
  position: absolute;

  top: 50%;

  right: -30px;

  transform: translateY(-50%);

  font-size: 15rem;

  opacity: 0.09;

  filter: grayscale(1);

  pointer-events: none;

  user-select: none;

  z-index: 0;
}

/* HEADER */

.ingredientes-header {
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 1rem;

  margin-bottom: 2.2rem;

  position: relative;

  z-index: 2;
}

.ingredientes-info {
  display: flex;

  flex-direction: column;
}

/* MINI TITLE */

.ingredientes-mini-title {
  font-size: 0.8rem;

  text-transform: uppercase;

  letter-spacing: 2px;

  color: #b45309;

  font-weight: 700;

  margin-bottom: 0.6rem;
}

/* TITLE */

.section-title {
  font-size: 2.2rem;

  line-height: 1;

  font-weight: 800;

  letter-spacing: -1.5px;

  color: #1f2937;

  margin: 0;
}

/* COUNT */

.ingredientes-count {
  min-width: 85px;
  height: 85px;

  border-radius: 24px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.9),
      rgba(255,255,255,0.65)
    );

  border: 1px solid rgba(255,255,255,0.9);

  backdrop-filter: blur(10px);

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  box-shadow:
    0 10px 25px rgba(0,0,0,0.04);
}

.count-number {
  font-size: 2rem;

  font-weight: 800;

  line-height: 1;

  color: #ea580c;
}

.count-label {
  font-size: 0.72rem;

  text-transform: uppercase;

  letter-spacing: 1px;

  font-weight: 700;

  color: #c2410c;

  margin-top: 0.3rem;
}

/* LIST */

.ingredientes-list {
  list-style: none;

  padding: 0;
  margin: 0;

  display: flex;

  flex-direction: column;

  gap: 0.9rem;

  position: relative;

  z-index: 2;
}

/* ITEM */

.ingrediente-item {
  display: flex;

  align-items: center;

  gap: 1rem;

  padding:
    1rem
    1.1rem;

  border-radius: 18px;

  background-color:
    rgba(255, 248, 240, 0.65);

  border: 1px solid transparent;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.ingrediente-item:hover {
  transform: translateX(5px);

  background-color:
    rgba(255, 250, 245, 0.95);

  border-color: #f1dfc9;
}

/* BULLET */

.ingrediente-bullet {
  width: 9px;
  height: 9px;

  border-radius: 50%;

  background:
    linear-gradient(
      145deg,
      #fb923c,
      #ea580c
    );

  flex-shrink: 0;

  box-shadow:
    0 0 0 5px rgba(249,115,22,0.08);
}

/* TEXT */

.ingrediente-text {
  color: #374151;

  line-height: 1.6;

  font-size: 1rem;

  font-weight: 500;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .ingredientes-card {
    padding: 1.7rem;
  }

  .ingredientes-header {
    flex-direction: column;
  }

  .ingredientes-count {
    width: 100%;
    height: 80px;

    border-radius: 20px;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .ingredientes-bg-icon {
    font-size: 10rem;

    right: -20px;
  }
}
</style>
