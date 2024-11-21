<template>
    <div>
      <h1>Recept</h1>
      <input v-model="searchQuery" placeholder="Sök efter recept..." />
      <div v-if="error" class="error">{{ error }}</div>
      <div v-else>
        <RecipeCard
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          :recipe="recipe"
          @add-to-favorites="addToFavorites"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, onMounted } from 'vue'
  import RecipeCard from '../components/RecipeCard.vue'
  import { fetchRecipes } from '../services/recipeService'
  
  export default defineComponent({
    components: { RecipeCard },
    setup() {
      const recipes = ref([])
      const searchQuery = ref('')
      const error = ref('')
  
      const filteredRecipes = computed(() =>
        recipes.value.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      )
  
      const addToFavorites = (recipe: any) => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
        localStorage.setItem('favorites', JSON.stringify([...favorites, recipe]))
      }
  
      onMounted(async () => {
        try {
          recipes.value = await fetchRecipes()
        } catch (err) {
          error.value = 'Kunde inte ladda recept.'
        }
      })
  
      return { recipes, searchQuery, filteredRecipes, error, addToFavorites }
    },
  })
  </script>
  