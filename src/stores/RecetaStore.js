import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecetaStore = defineStore("receta", () => {
  const recetas = ref([]);
  const cargando = ref(true);

  const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = import.meta.env.VITE_API_KEY_SPOONC;

  async function cargarRecetas() {
    try {
      console.log("esta es la api " + API_KEY);

      const response = await fetch(`${API_URL}?apiKey=${API_KEY}`);

      if (!response.ok) {
        console.log("no carga " + response.status);
      }

      const data = await response.json();

      recetas.value = data.results || [];
    } catch (e) {
      console.log(e);
    } finally {
      cargando.value = false;
    }
  }

  return {
    recetas,
    cargando,
    cargarRecetas,
  };
});
