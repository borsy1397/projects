import { htmlElements } from "./base"


const renderRecipe = recipe => {

    const recipeHtml = `
    <div class="card-group col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 text-center" style="margin-bottom: 10px;" data-url=${recipe.recipe.url} data-hover="false">
        <div class="card  card__one" style="margin-right: 5px; margin-left: 5px;">
            <div class="grandchild">
                <img class="img-fluid text-center" style="border-radius: 50%; margin-top: 10px; height: 120px; width: 120px; border: 2px white solid; box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);"
                    src="${recipe.recipe.image}" alt="Card image cap">
            </div>
            <div class="card-body">
                <h5 class="card-title">${renderTitle(recipe.recipe.label)}</h5>
            
            </div>
            <div class="card-footer">
                <small class="text-muted">from ${recipe.recipe.source}</small>
            </div>
        </div>
    </div>`
    console.log(recipe);
    htmlElements.recipeList.insertAdjacentHTML('beforeend', recipeHtml);
}

const renderNotFound = () => {
    const notFoundHtml = `<div class="notFound">
        <h1>Not found :(</h1>
    </div>`

    htmlElements.recipeList.insertAdjacentHTML('beforebegin', notFoundHtml);
}

const renderDietHealthDetails = (diet) => {
    return `<li style="font-size: 12px;">${diet}</li>`;
}

export const renderDietHealth = (card, recipes) => {

    for (let i = 0; i < recipes.length; i++) {
        if (card.dataset.url == recipes[i].recipe.url) {
            const mark = `<div class="diethealth" style="padding: 0px; margin: 0px;">
            <div class="row" style="padding: 0px; margin: 0px;">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" style="padding: 0px; margin: 0px; ">
                <span style="border: 1px white solid;">Health</span>
                    <ul style="list-style-type: none; margin:0 px; padding: 0px; "> 
                    ${recipes[i].recipe.healthLabels.map(el => renderDietHealthDetails(el)).join('')}
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <span style="border: 1px white solid;">Diet</span>
                    <ul style="list-style-type: none; margin:0 px; padding: 0px;"> 
                    ${recipes[i].recipe.dietLabels.map(el => renderDietHealthDetails(el)).join('')}
                    </ul>
                </div>
            </div>

        </div>`
            const body = card.querySelector('.card-body');
            const card_body = card.querySelector('.card__one');
            card_body.style.position = "relative";
            body.insertAdjacentHTML('beforeend', mark);
 
        }
    }

}


export const unRenderDietHealth = (card) => {

    const body = card.querySelector('.card-body');
    body.style.position = "static";

    const remove = card.querySelector('.diethealth');
    if (remove) remove.parentElement.removeChild(remove);

}

const renderTitle = title => {
    let tmp = title.split(" ");
    let render = "";
    let count = 0;

    for (let i = 0; i < tmp.length; i++) {
        if ((render.length + tmp[i].length) < 35) {
            render += " " + tmp[i];
        } else {
            count++;
        }
    }

    if (count) {
        render += "...";
    }

    return render;
}


export const renderButtons = (recipeCount, page, recipePerPage) => {

    clearButtons();

    if (page != 1) {
        const prev = `<button class="btn-inline prev btn-page" id="prev" data-goto=${page}> <img class="arrow" src="/asset/back.png" /> Page ${page - 1} </button>`;
        htmlElements.pages.insertAdjacentHTML('beforeend', prev);
    }

    if ((recipeCount / recipePerPage) > page) {

        const next = `<button class="btn-inline next btn-page" id="next" data-goto=${page}>  Page ${page + 1} <img class="arrow" src="/asset/right-arrow.png" /> </button>`;
        htmlElements.pages.insertAdjacentHTML('beforeend', next);
    }
}

export const clearButtons = () => {
    const prev = document.querySelector('.prev');
    if (prev) prev.parentElement.removeChild(prev);
    const next = document.querySelector('.next');
    if (next) next.parentElement.removeChild(next);
}

export const getInput = () => { return htmlElements.searchFieldValue.value; };

export const renderRecipes = (recipes, page = 1) => {
    const recipePerPage = 8;

    const start = (page - 1) * recipePerPage;
    const end = page * recipePerPage;


    if (recipes.length < 1) {
        renderNotFound();
    } else {
        recipes.slice(start, end).forEach(renderRecipe);
        renderButtons(recipes.length, page, recipePerPage);
    }

};



export const renderLoaderRecipe = () => {
    const loader = `
    <img id="loaderRecipe" src="/asset/spinning-circles.svg" />
    `;
    htmlElements.recipeList.insertAdjacentHTML('beforebegin', loader);
};

export const clearLoaderRecipe = () => {
    const loader = document.querySelector('#loaderRecipe');
    if (loader) loader.parentElement.removeChild(loader);
};

export const clearBestRecipes = () => {
    const bestRecipes = document.querySelector('.bestRecipes');
    if (bestRecipes) bestRecipes.parentElement.removeChild(bestRecipes);
    const notFound = document.querySelector('.notFound');
    if (notFound) notFound.parentElement.removeChild(notFound);
};



export const clearInput = () => {
    htmlElements.searchFieldValue.value = '';
};

export const clearResults = () => {
    htmlElements.recipeList.innerHTML = '';
};

