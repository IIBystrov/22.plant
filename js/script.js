"use strict";


//variables

const orderBtn = document.querySelectorAll(".btn--action");
const closeBtn = document.querySelector(".btn--close");
const modal = document.querySelector(".page__modal");
const modalForm = document.querySelector('[data-id="modalForm"]');


// eventlistener

orderBtn.forEach(btn => {
    btn.addEventListener("click", modalFormOpen);
});

closeBtn.addEventListener("click", modalFormClose);


//function

function modalFormOpen() {
    modalForm.classList.add("modal--form");
};

function modalFormClose() {
    modalForm.classList.remove("modal--form")
}