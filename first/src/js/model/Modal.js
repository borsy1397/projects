export default class Modal {
    
    constructor(card) {
        this.card = card;
    }

    findRecipe(recipes) {

        for (let i = 0; i < recipes.length; i++) {
            if (this.card.dataset.url == recipes[i].recipe.url) {
                return recipes[i].recipe;
            }
        }    
    }
}