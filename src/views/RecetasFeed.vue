<script setup>
import { useRecetaStore } from '@/stores/RecetaStore';
import { onMounted } from 'vue';

const recetaStore = useRecetaStore();
onMounted(async () => {
    recetaStore.cargarRecetas()
})
</script>


<template>
    <h2>Recetas</h2>
    <h3 v-if="recetaStore.cargando">Cargando...</h3>
    <div v-if="!recetaStore.recetas.length" class="recetas-error" >
        <h3>La lista está vacía</h3>
    </div>
    <div v-else class="container-recetas">
        <ul class="recetas-list">
            <li v-for="receta in recetaStore.recetas" :key="receta.id">
                <RouterLink>
                <h4>{{ receta.title }}</h4>
                <img :src="receta.image" alt="" class="img-receta">
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
