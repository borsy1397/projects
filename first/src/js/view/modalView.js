import { htmlElements, renderNotFound } from "./base";

const renderIngDietHealthDetails = (diet) => {
    return `<li><span>&#10003;</span>${diet}</li>`;
}

/*
export const renderModal = (card, recipes) => {
    for (let i = 0; i < recipes.length; i++) {
        if (card.dataset.url == recipes[i].recipe.url) {
            const modalHtml = `
            <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>${recipes[i].recipe.label}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div class="modal-body-image">
                                <img src="${recipes[i].recipe.image}" alt="">
                            </div>
                            <div class="yield-time">
                                <div>
                                    <span><i class="far fa-user"> </i>${recipes[i].recipe.yield}</span>
                                </div>
                                <div>
                                    <span><i class="far fa-clock"> </i>${(recipes[i].recipe.totalTime) ? recipes[i].recipe.totalTime + ' minutes' : 'unknown'}</span>
                                </div>
                            </div>
                            <div class="row ing-diet-health">
                                <div class="col-xs-12 col-sm-12 col-md-6">
                                    <div class="list-ing-diet-health">
                                            <h5>Ingredients</h5>
                                        <ul>
                                            ${recipes[i].recipe.ingredientLines.map(el => renderIngDietHealthDetails(el)).join('')}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-3">
                                    <div class="list-ing-diet-health">
                                        <h5>Diet</h5>
                                        <ul>
                                            ${recipes[i].recipe.dietLabels.map(el => renderIngDietHealthDetails(el)).join('')}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-3">
                                    <div class="list-ing-diet-health">
                                            <h5>Health</h5>
                                        <ul>
                                            ${recipes[i].recipe.healthLabels.map(el => renderIngDietHealthDetails(el)).join('')}</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div>
                            <span>Recipe from: </span><a href="${recipes[i].recipe.url}" target="_blank">${recipes[i].recipe.source}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
            htmlElements.recipeList.insertAdjacentHTML('beforebegin', modalHtml);
        }
    }
};*/

export const renderModal = (recipe) => {
            const modalHtml = `
            <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>${recipe.label}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div class="modal-body-image">
                                <img src="${recipe.image}" alt="">
                            </div>
                            <div class="yield-time">
                                <div>
                                    <span><i class="far fa-user"> </i>${recipe.yield}</span>
                                </div>
                                <div>
                                    <span><i class="far fa-clock"> </i>${(recipe.totalTime) ? recipe.totalTime + ' minutes' : 'unknown'}</span>
                                </div>
                            </div>
                            <div class="row ing-diet-health">
                                <div class="col-xs-12 col-sm-12 col-md-6">
                                    <div class="list-ing-diet-health">
                                            <h5>Ingredients</h5>
                                        <ul>
                                            ${recipe.ingredientLines.map(el => renderIngDietHealthDetails(el)).join('')}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-3">
                                    <div class="list-ing-diet-health">
                                        <h5>Diet</h5>
                                        <ul>
                                            ${recipe.dietLabels.map(el => renderIngDietHealthDetails(el)).join('')}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-3">
                                    <div class="list-ing-diet-health">
                                            <h5>Health</h5>
                                        <ul>
                                            ${recipe.healthLabels.map(el => renderIngDietHealthDetails(el)).join('')}</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div>
                            <span>Recipe from: </span><a href="${recipe.url}" target="_blank">${recipe.source}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
            htmlElements.recipeList.insertAdjacentHTML('beforebegin', modalHtml);
        
    
};