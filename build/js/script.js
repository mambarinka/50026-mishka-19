var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modal = document.querySelector(".modal");
var buttonCart = document.querySelectorAll(".js-button-cart");
var overlay = document.querySelector(".modal__overlay-js");
var buttonAdd = document.querySelector(".modal__button");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (buttonCart) {
  for (var i = 0; i < buttonCart.length; i++) {
    buttonCart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--js-show");
    })
  }
};

if (buttonAdd) {
  buttonAdd.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--js-show");
  })
};

if (overlay) {
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--js-show");
  })
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.classList.remove("modal--js-show");
    overlay.classList.remove("modal__overlay--js-show");
  }
});
