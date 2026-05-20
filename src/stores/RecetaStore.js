import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecetaStore = defineStore("receta", () => {
  /* STATE */

  const recetas = ref([]);

  const receta = ref(null);

  const cargandoRecetas = ref(false);

  const cargandoReceta = ref(false);

  const error = ref(null);

  /* CONFIG */

  const API_URL = "https://api.spoonacular.com/recipes";

  const API_KEY = import.meta.env.VITE_API_KEY_SPOONC;

  /* ACTIONS */

  async function cargarRecetas() {
    cargandoRecetas.value = true;

    error.value = null;

    try {
      const response = await fetch(
        `${API_URL}/complexSearch?apiKey=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();

      recetas.value = data.results || [];
    } catch (e) {
      error.value = e.message;
    } finally {
      cargandoRecetas.value = false;
    }
  }

  async function cargarRecetaById(id) {
    cargandoReceta.value = true;

    error.value = null;

    try {
      const response = await fetch(
        `${API_URL}/${id}/information?apiKey=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();

      receta.value = data;
    } catch (e) {
      error.value = e.message;
    } finally {
      cargandoReceta.value = false;
    }
  }

  function limpiarReceta() {
    receta.value = null;
  }

  return {
    /* STATE */

    recetas,
    receta,

    cargandoRecetas,
    cargandoReceta,

    error,

    /* ACTIONS */

    cargarRecetas,
    cargarRecetaById,
    limpiarReceta,
  };
});
