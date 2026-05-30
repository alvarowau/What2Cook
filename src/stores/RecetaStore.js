import { defineStore } from "pinia";
import { ref } from "vue";

import recetasDetalle from "./recetas-detalle.json";
import recetasFeed from "./recetas.json";

export const useRecetaStore = defineStore("receta", () => {
  /* ---------------- STATE ---------------- */

  const recetas = ref([]);

  const recetaActual = ref(null);

  const cargandoRecetas = ref(false);

  const cargandoReceta = ref(false);
  const resultadosDespensa = ref([]);

  const error = ref(null);

  /* ---------------- ACTIONS ---------------- */

  async function cargarRecetas() {
    if (recetas.value.length > 0 || cargandoRecetas.value) {
      return;
    }

    cargandoRecetas.value = true;

    error.value = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      recetas.value = recetasFeed;
    } catch {
      error.value = "No se pudieron cargar las recetas";
    } finally {
      cargandoRecetas.value = false;
    }
  }

  async function buscarPorIngredientes(ingredientes) {
    limpiarRecetaActual();
    cargandoRecetas.value = true;

    error.value = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      resultadosDespensa.value = recetasDetalle.filter((receta) =>
        receta.extendedIngredients.some((ingredienteReceta) =>
          ingredientes.some((ingredienteSeleccionado) =>
            ingredienteReceta.original
              .toLowerCase()
              .includes(ingredienteSeleccionado.toLowerCase()),
          ),
        ),
      );
    } catch {
      error.value = "No se pudieron buscar recetas";
    } finally {
      cargandoRecetas.value = false;
    }
  }

  function limpiarResultadosDespensa() {
    resultadosDespensa.value = [];
  }

  async function cargarRecetaPorId(id) {
    if (!id) {
      error.value = "El ID de la receta es obligatorio";
      return;
    }

    cargandoReceta.value = true;

    error.value = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const receta = recetasDetalle.find((receta) => receta.id === Number(id));

      if (!receta) {
        throw new Error("Receta no encontrada");
      }

      recetaActual.value = receta;
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
    resultadosDespensa,
    recetaActual,

    cargandoRecetas,
    cargandoReceta,

    error,

    cargarRecetas,
    buscarPorIngredientes,
    cargarRecetaPorId,

    limpiarRecetaActual,
  };
});
