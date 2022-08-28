class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        recipe,
        image
    ) {
        this.id = id
        this.categoryIds = categoryIds
        this.title = title
        this.affordability = affordability
        this.complexity = complexity
        this.imageUrl = imageUrl
        this.duration = duration
        this.ingredients = ingredients
        this.recipe = recipe
        this.image = image
    }}

export default Meal    