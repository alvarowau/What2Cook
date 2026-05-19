<script setup>
import { useRecetaStore } from '@/stores/RecetaStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const recetaId = route.params.id
</script>

<template>
 <h3>El id de la receta es {{ recetaId }}</h3>
</template>

