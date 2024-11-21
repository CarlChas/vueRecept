<template>
    <div class="recipe-card">
      <h3>{{ recipe.strMeal }}</h3>
      <img :src="recipe.strMealThumb" alt="Recipe Image" />
      <p>{{ recipe.strInstructions.slice(0, 100) }}...</p>
      <button @click="addToFavorites">Lägg till i favoriter</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      recipe: {
        type: Object as PropType<{
          strMeal: string;
          strMealThumb: string;
          strInstructions: string;
        }>,
        required: true,
      },
    },
    methods: {
      addToFavorites() {
        this.$emit('add-to-favorites', this.recipe);
      },
    },
  });
  </script>
  