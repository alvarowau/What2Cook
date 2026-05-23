import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecetaStore = defineStore("receta", () => {
  /* ---------------- STATE ---------------- */

  const recetas = ref([]);

  const recetaActual = ref(null);

  const cargandoRecetas = ref(false);

  const cargandoReceta = ref(false);

  const error = ref(null);

  /* ---------------- CONFIG ---------------- */

  const API_URL = "https://api.spoonacular.com/recipes";

  const API_KEY = import.meta.env.VITE_API_KEY_SPOONC;

  /* ---------------- ACTIONS ---------------- */

  async function cargarRecetas() {
    cargandoRecetas.value = true;

    error.value = null;

    try {
      const response = await fetch(
        `${API_URL}/complexSearch?apiKey=${API_KEY}&language=es`,
      );

      if (!response.ok) {
        throw new Error("No se pudieron cargar las recetas");
      }

      const data = await response.json();

      recetas.value = data.results ?? [];
    } catch (e) {
      error.value = e.message;
    } finally {
      cargandoRecetas.value = false;
    }
  }

  async function cargarRecetaPorId(id) {
    if (!id) {
      error.value = "El ID de la receta es obligatorio";
      return;
    }

    cargandoReceta.value = true;

    error.value = null;

    try {
      const recetaExistente = recetas.value.find((receta) => receta.id === id);

      if (recetaExistente && recetaActual.value?.id === id) {
        return;
      }

      const response = await fetch(
        `${API_URL}/${id}/information?apiKey=${API_KEY}&language=es`,
      );

      if (!response.ok) {
        throw new Error("No se pudo cargar la receta");
      }

      const data = await response.json();

      recetaActual.value = data;
    } catch (e) {
      error.value = e.message;
    } finally {
      cargandoReceta.value = false;
    }
  }

  function limpiarRecetaActual() {
    recetaActual.value = null;
  }

  return {
    recetas,
    recetaActual,

    cargandoRecetas,
    cargandoReceta,

    error,

    cargarRecetas,
    cargarRecetaPorId,

    limpiarRecetaActual,
  };
});
