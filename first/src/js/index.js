import Search from './model/Search';
import Modal from './model/Modal'
import { htmlElements, clearBestRecipes, renderLoaderRecipe, clearLoaderRecipe } from "./view/base";
import * as searchView from './view/searchView';
import * as modalView from './view/modalView';

const myNav = document.getElementById('navbaar');
const myLink = document.getElementsByClassName('nav-link');
const toggler = document.getElementById('toggler');
const cim = document.getElementById('cim');


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


  if (food) {
    state.searchRecipe = new Search(food);

    clearBestRecipes();
    renderLoaderRecipe();

    searchView.clearInput();
    searchView.clearResults();
    searchView.clearButtons();

    try {

      await state.searchRecipe.getResults();

      clearLoaderRecipe();

      searchView.renderRecipes(state.searchRecipe.recipes);
      htmlElements.recipeListStarter.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      alert(err);
    }

    
  }

};


htmlElements.searchField.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

htmlElements.pages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  let goToPage = 0;
  if (btn) {
    console.log(btn);
    if (btn.classList.contains("prev")) {
      goToPage = parseInt(btn.dataset.goto, 10) - 1;
    } else {
      goToPage = parseInt(btn.dataset.goto, 10) + 1;
    }

    searchView.clearResults();
    searchView.renderRecipes(state.searchRecipe.recipes, goToPage);
  }
});


htmlElements.recipeList.addEventListener('click', e => {

  const card = e.target.closest('.card-group');
  const modal = document.querySelector('#myModal');

  if (modal) {
    modal.parentElement.removeChild(modal);
  }

  if (card) {

    modalView.renderModal(card, state.searchRecipe.recipes);
    $("#myModal").modal();
  }
});

const controlModal = (card) => {

};




/*
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
});*/





