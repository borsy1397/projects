export const htmlElements = {
    searchField: document.querySelector('.searchField'),
    searchFieldValue: document.querySelector('#searchFieldValue'),
    recipeList: document.querySelector('.recipeList'),
    containerList: document.querySelector('.containerList'),
    oneCard: document.querySelector('.card-group'),
    pages: document.querySelector('.pages'),
    recipeListStarter: document.querySelector('#recipeStarter'),
    prevButton: document.querySelector('#prev'),
    nextButton: document.querySelector('#next'),
    modal: document.querySelector('#myModal')
};

export const renderNotFound = () => {
    const notFoundHtml = `<div class="notFound">
        <h1>Not found :(</h1>
    </div>`

    htmlElements.recipeList.insertAdjacentHTML('beforebegin', notFoundHtml);
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
    if (bestRecipes){
        bestRecipes.parentElement.removeChild(bestRecipes);
        htmlElements.containerList.style.paddingTop = "30px";
    }
    const notFound = document.querySelector('.notFound');
    if (notFound) notFound.parentElement.removeChild(notFound);
};



