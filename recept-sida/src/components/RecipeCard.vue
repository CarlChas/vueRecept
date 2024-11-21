<template>
    <div class="recipe-card">
      <h3>{{ recipe.title }}</h3>
      <img :src="recipe.image" alt="Recipe Image" />
      <p>{{ recipe.description }}</p>
      <button @click="addToFavorites">Lägg till i favoriter</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue'
  
  export default defineComponent({
    props: {
      recipe: {
        type: Object as PropType<{ title: string; image: string; description: string }>,
        required: true,
      },
    },
    methods: {
      addToFavorites() {
        this.$emit('add-to-favorites', this.recipe)
      },
    },
  });
  </script>
  