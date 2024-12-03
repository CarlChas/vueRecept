<template>
    <div>
        <h1>Recept</h1>
        <div>
            <input v-model="searchQuery" placeholder="Sök efter recept..." />
            <button @click="loadRecipes">Sök</button>
        </div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else-if="filteredRecipes.length === 0">Inga recept hittades.</div>
        <div v-else>
            <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.idMeal" :recipe="recipe"
                @add-to-favorites="addToFavorites" />
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
        const recipes = ref<Array<any>>([])
        const searchQuery = ref('')
        const error = ref('')

        const filteredRecipes = computed(() =>
            recipes.value.filter((recipe) =>
                recipe.strMeal.toLowerCase().includes(searchQuery.value.toLowerCase())
            )
        )

        const loadRecipes = async () => {
            try {
                recipes.value = await fetchRecipes(searchQuery.value) // Hämta data baserat på sökning
            } catch (err) {
                error.value = 'Kunde inte ladda recept.'
                console.error(err)
            }
        }

        const addToFavorites = (recipe: any) => {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
            const alreadyExists = favorites.some((fav: any) => fav.idMeal === recipe.idMeal)
            if (!alreadyExists) {
                favorites.push(recipe)
                localStorage.setItem('favorites', JSON.stringify(favorites))
            }
        }

        onMounted(loadRecipes);

        return { recipes, searchQuery, filteredRecipes, error, loadRecipes, addToFavorites  }
    },
})
</script>
