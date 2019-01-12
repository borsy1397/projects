/*import axios from 'axios';

const key = "89303803652ea711747c9793c2ba71d8";
const id = "032e0a28"

const instance = axios.create({
  baseURL: `https://api.edamam.com/`,
  timeout: 10000,
});

instance.get(`/search?q=chicken&app_id=${id}&app_key=${key}&to=30`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log("sdfsdf");*/

const myNav = document.getElementById('navbaar');
const myLink = document.getElementsByClassName('nav-link');

window.onscroll = () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    myNav.classList.add("custom");
    var i;
    for (i = 0; i < myLink.length; i++) {
      myLink[i].style.color = "black";
    }
  }
  else {
    myNav.classList.remove("custom");
    var i;
    for (i = 0; i < myLink.length; i++) {
      myLink[i].style.color = "white";
    }
  }
};
/*
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 10) {
	    $(".custom2").css("background" , "white");
	  }

	  else{
		  $(".custom2").css("background" , "transparent");
	  }
  })
})*/