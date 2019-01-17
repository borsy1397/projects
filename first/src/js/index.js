import Search from "./model/Search";
import { htmlElements } from "./view/base";
import * as searchView from './view/searchView';

const myNav = document.getElementById('navbaar');
const myLink = document.getElementsByClassName('nav-link');
const toggler = document.getElementById('toggler');
const cim = document.getElementById('cim');

/**
 * STATE of the APP
 */
const state = {}

/**
 * Recipe search controller
 * class Search
 */
const controlSearch = async () => {
  
  const food = searchView.getInput();
  searchView.clearBestRecipes();
  searchView.renderLoaderRecipe();
  searchView.clearInput();
  searchView.clearResults();
  searchView.clearButtons();

  if (food) {
    state.searchRecipe = new Search(food);

    try {

      await state.searchRecipe.getResults();


      searchView.clearLoaderRecipe();

      searchView.renderRecipes(state.searchRecipe.recipes);
      
    } catch (err) {
      alert(err);
    }

    htmlElements.recipeListStarter.scrollIntoView({behavior: "smooth", block: "start"});
   

  }

};


window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    myNav.classList.add("custom");
    var i;
    for (i = 0; i < myLink.length; i++) {
      myLink[i].style.color = "black";
    }
  } else {
    myNav.classList.remove("custom");
    var i;
    for (i = 0; i < myLink.length; i++) {
      myLink[i].style.color = "white";
    }
  }
});

toggler.addEventListener('click', () => {
  console.log(toggler.dataset.clicked);
  if (toggler.dataset.clicked === "false") {
    cim.style.marginTop = "140px";
    toggler.dataset.clicked = "true";
  } else {
    cim.style.marginTop = "0px";
    toggler.dataset.clicked = "false";
  }
});

htmlElements.searchField.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

htmlElements.pages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  let goToPage = 0;
  if (btn) {
    console.log(btn);
    if(btn.classList.contains("prev")) {
      goToPage = parseInt(btn.dataset.goto, 10) - 1;
    } else {
      goToPage = parseInt(btn.dataset.goto, 10) + 1;
    }
   
    searchView.clearResults();
    searchView.renderRecipes(state.searchRecipe.recipes, goToPage);
  }
});

htmlElements.recipeList.addEventListener('mouseover', e => {
 
 const card = e.target.closest('.card-group');

  if(card) {
    searchView.renderDietHealth(card, state.searchRecipe.recipes);
  }
});

htmlElements.recipeList.addEventListener('mouseout', e => {

  const card = e.target.closest('.card-group');
  if(card) {
    searchView.unRenderDietHealth(card, state.searchRecipe.recipes);
  }
});
/*
htmlElements.prevButton.addEventListener('click', e => {
  e.preventDefault();
  htmlElements.prevButton.dataset.page -= 1;
  htmlElements.nextButton.dataset.page -= 1;
  searchView.renderRecipes(state.searchRecipe.recipes, htmlElements.prevButton.dataset.page);
})

htmlElements.nextButton.addEventListener('click', e => {
  e.preventDefault();
  htmlElements.nextButton.dataset.page += 1;
  htmlElements.prevButton.dataset.page += 1;
  searchView.renderRecipes(state.searchRecipe.recipes, htmlElements.prevButton.dataset.page);
})*/



