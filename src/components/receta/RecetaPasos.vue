<script setup>
defineProps({
  pasos: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="pasos-card">
    <!-- HEADER -->

    <div class="pasos-header">
      <div>
        <p class="pasos-mini-title">Paso a paso</p>

        <h2 class="section-title">Preparación</h2>
      </div>
    </div>

    <!-- TIMELINE -->

    <div class="timeline">
      <div
        v-for="(paso, index) in pasos"
        :key="paso.number"
        class="timeline-item"
      >
        <!-- LEFT -->

        <div class="timeline-left">
          <div class="timeline-number">
            {{ paso.number }}
          </div>

          <div v-if="index !== pasos.length - 1" class="timeline-line"></div>
        </div>

        <!-- CONTENT -->

        <div class="timeline-content">
          <p class="timeline-text">
            {{ paso.step }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pasos-card {
  position: relative;

  overflow: hidden;

  background: linear-gradient(180deg, #fffaf5, #fff6ee);

  border-radius: 32px;

  padding: 2.5rem;

  border: 1px solid #f1dfc9;

  box-shadow: 0 18px 45px rgba(180, 83, 9, 0.05);
}

/* HEADER */

.pasos-header {
  margin-bottom: 2.5rem;
}

.pasos-mini-title {
  font-size: 0.8rem;

  text-transform: uppercase;

  letter-spacing: 2px;

  color: #c2410c;

  font-weight: 700;

  margin-bottom: 0.6rem;
}

.section-title {
  font-size: 2.2rem;

  font-weight: 800;

  letter-spacing: -1.5px;

  color: #1f2937;

  margin: 0;
}

/* TIMELINE */

.timeline {
  display: flex;

  flex-direction: column;

  gap: 2rem;
}

/* ITEM */

.timeline-item {
  display: flex;

  gap: 1.5rem;

  position: relative;
}

/* LEFT */

.timeline-left {
  display: flex;

  flex-direction: column;

  align-items: center;

  flex-shrink: 0;
}

/* NUMBER */

.timeline-number {
  width: 52px;
  height: 52px;

  border-radius: 50%;

  background: linear-gradient(145deg, #fb923c, #ea580c);

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  font-weight: 800;

  font-size: 1rem;

  box-shadow: 0 10px 20px rgba(249, 115, 22, 0.25);

  z-index: 2;
}

/* LINE */

.timeline-line {
  width: 3px;

  flex: 1;

  margin-top: 0.5rem;

  background: linear-gradient(180deg, #fdba74, #fed7aa);

  border-radius: 999px;
}

/* CONTENT */

.timeline-content {
  flex: 1;

  padding: 1.2rem 1.4rem;

  border-radius: 24px;

  background-color: rgba(255, 248, 240, 0.65);

  border: 1px solid transparent;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.timeline-content:hover {
  transform: translateY(-3px);

  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
  background-color: rgba(255, 250, 245, 0.95);

  border-color: #f1dfc9;
}

/* TEXT */

.timeline-text {
  color: #374151;

  line-height: 1.8;

  font-size: 0.98rem;

  margin: 0;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .pasos-card {
    padding: 1.7rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .timeline-item {
    gap: 1rem;
  }

  .timeline-number {
    width: 44px;
    height: 44px;
  }

  .timeline-content {
    padding: 1rem;
  }
}
</style>
