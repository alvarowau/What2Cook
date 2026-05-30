import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecetaStore = defineStore("receta", () => {
  /* ---------------- STATE ---------------- */

  const recetas = ref([]);

  const resultadosDespensa = ref([]);

  const recetaActual = ref(null);

  const cargandoRecetas = ref(false);

  const cargandoReceta = ref(false);

  const error = ref(null);
  const recetasPorId = ref({});

  /* ---------------- CONFIG ---------------- */

  const API_URL = "https://api.spoonacular.com/recipes";

  const API_KEY = import.meta.env.VITE_API_KEY_SPOONC;

  /* ---------------- ACTIONS ---------------- */

  async function cargarRecetas() {
    if (recetas.value.length > 0 || cargandoRecetas.value) {
      return;
    }

    cargandoRecetas.value = true;

    error.value = null;

    try {
      const response = await fetch(
        `${API_URL}/complexSearch?apiKey=${API_KEY}&number=12`,
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

  async function buscarPorIngredientes(ingredientes) {
    limpiarRecetaActual();

    if (!ingredientes.length) {
      resultadosDespensa.value = [];

      return;
    }

    cargandoRecetas.value = true;

    error.value = null;

    try {
      const ingredientesParam = ingredientes
        .map((ingrediente) => encodeURIComponent(ingrediente))
        .join(",+");

      const response = await fetch(
        `${API_URL}/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientesParam}&number=6`,
      );

      if (!response.ok) {
        throw new Error("No se pudieron cargar las recetas");
      }

      const data = await response.json();

      resultadosDespensa.value = data;
    } catch {
      error.value = "No se pudieron buscar recetas";
    } finally {
      cargandoRecetas.value = false;
    }
  }

  async function cargarRecetaPorId(id) {
    if (!id) {
      error.value = "El ID de la receta es obligatorio";
      return;
    }

    error.value = null;

    const recetaCacheada = recetasPorId.value[id];

    if (recetaCacheada) {
      recetaActual.value = recetaCacheada;
      console.log("la receta estaba cacheada");

      return;
    }

    cargandoReceta.value = true;

    try {
      const response = await fetch(
        `${API_URL}/${id}/information?apiKey=${API_KEY}&language=es`,
      );

      if (!response.ok) {
        throw new Error("No se pudo cargar la receta");
      }

      const data = await response.json();

      recetasPorId.value[id] = data;

      recetaActual.value = data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Error desconocido";
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
    resultadosDespensa,

    cargandoRecetas,
    cargandoReceta,

    error,

    buscarPorIngredientes,
    cargarRecetas,
    cargarRecetaPorId,

    limpiarRecetaActual,
  };
});
