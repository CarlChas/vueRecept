<template>
  <div id="app">
    <nav>
      <router-link to="/">Hem</router-link> |
      <router-link to="/favorites">Favoriter</router-link>
    </nav>
    <router-view /> <!-- Visar rätt komponent baserat på routen -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}

#error {
  color: red;
}

.recipe-card {
  background: #fff;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.recipe-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
