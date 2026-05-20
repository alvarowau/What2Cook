<script setup>
defineProps({
  text: {
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
  <span
    class="badge"
    :class="`badge-${variant}`"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  padding:
    0.5rem
    1rem;

  border-radius: 999px;

  font-size: 0.85rem;

  font-weight: 600;

  border: 1px solid transparent;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

/* DEFAULT */

.badge-default {
  background-color: #f3f4f6;

  color: #374151;

  border-color: #e5e7eb;
}

/* GREEN */

.badge-green {
  background-color: #dcfce7;

  color: #166534;

  border-color: #bbf7d0;
}

/* BLUE */

.badge-blue {
  background-color: #dbeafe;

  color: #1d4ed8;

  border-color: #bfdbfe;
}

/* ORANGE */

.badge-orange {
  background-color: #ffedd5;

  color: #c2410c;

  border-color: #fed7aa;
}

/* RED */

.badge-red {
  background-color: #fee2e2;

  color: #b91c1c;

  border-color: #fecaca;
}

/* PURPLE */

.badge-purple {
  background-color: #f3e8ff;

  color: #7e22ce;

  border-color: #e9d5ff;
}
</style>
