<template>
    <div>
      <h1>Mina favoriter</h1>
      <RecipeCard
        v-for="recipe in favorites"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import RecipeCard from '../components/RecipeCard.vue'
  
  export default defineComponent({
    components: { RecipeCard },
    setup() {
      const favorites = ref([])
  
      onMounted(() => {
        favorites.value = JSON.parse(localStorage.getItem('favorites') || '[]')
      })
  
      return { favorites }
    },
  })
  </script>
  