<script setup>
import NavbarView from './views/NavbarView.vue';

</script>

<template>
  <NavbarView/>
  <RouterView/>
</template>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #fff8f1;
    font-family: Arial, sans-serif;
    /* Evita el scroll horizontal que a veces rompe el sticky */
    overflow-x: hidden;
}
</style>
