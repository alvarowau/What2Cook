<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },

  value: {
    type: [String, Number],
    required: true,
  },

  label: {
    type: String,
    required: true,
  },

  variant: {
    type: String,
    default: 'default',
  },
});
</script>

<template>
  <div
    class="stat-card"
    :class="`stat-${variant}`"
  >

    <div class="stat-top">

      <span class="stat-icon">
        {{ icon }}
      </span>

      <span class="stat-value">
        {{ value }}
      </span>

    </div>

    <span class="stat-label">
      {{ label }}
    </span>

  </div>
</template>

<style scoped>
.stat-card {
  min-width: 140px;

  padding:
    1rem
    1.2rem;

  border-radius: 20px;

  border: 1px solid transparent;

  display: flex;

  flex-direction: column;

  gap: 0.7rem;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
}

/* TOP */

.stat-top {
  display: flex;

  align-items: center;

  gap: 0.7rem;
}

/* ICON */

.stat-icon {
  font-size: 1.3rem;
}

/* VALUE */

.stat-value {
  font-size: 1.4rem;

  font-weight: 700;
}

/* LABEL */

.stat-label {
  font-size: 0.9rem;

  font-weight: 500;

  opacity: 0.9;
}

/* DEFAULT */

.stat-default {
  background-color: #f8fafc;

  border-color: #e5e7eb;

  color: #111827;
}

/* ORANGE */

.stat-orange {
  background-color: #fff7ed;

  border-color: #fed7aa;

  color: #c2410c;
}

/* BLUE */

.stat-blue {
  background-color: #eff6ff;

  border-color: #bfdbfe;

  color: #1d4ed8;
}

/* RED */

.stat-red {
  background-color: #fef2f2;

  border-color: #fecaca;

  color: #dc2626;
}

/* GREEN */

.stat-green {
  background-color: #f0fdf4;

  border-color: #bbf7d0;

  color: #15803d;
}

/* PURPLE */

.stat-purple {
  background-color: #faf5ff;

  border-color: #e9d5ff;

  color: #7e22ce;
}
</style>
