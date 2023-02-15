"use strict";


//variables

const menuBtn = document.querySelector(".header__menu");
const headerContainer = document.querySelector(".header__container");
const orderBtn = document.querySelectorAll(".btn--action");
const closeBtn = document.querySelector(".btn--close");
const modal = document.querySelector(".page__modal");
const modalForm = document.querySelector('[data-id="modalForm"]');


// eventlistener

orderBtn.forEach(btn => {
    btn.addEventListener("click", modalFormOpen);
});

closeBtn.addEventListener("click", modalFormClose);

menuBtn.addEventListener("click", menuToggle);


//function

function modalFormOpen() {
    modalForm.classList.add("modal--form");
};

function modalFormClose() {
    modalForm.classList.remove("modal--form");
}

function menuToggle() {
    menuBtn.classList.toggle("menu--open");
    headerContainer.classList.toggle("header__container--active");
}