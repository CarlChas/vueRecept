export async function fetchRecipes(query: string = '') {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch recipes');
    }

    const data = await response.json();

    // Kontrollera om "meals" finns i svaret
    if (!data.meals) {
        return []; // Returnera en tom lista om inga recept hittades
    }

    return data.meals;
}
