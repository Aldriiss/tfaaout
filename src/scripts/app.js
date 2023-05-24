"use strict";

let burgerButton = document.querySelector(".burger");
let menu = document.querySelector(".nav__menu");
let body = document.querySelector("body");

if(burgerButton){
    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle('active');
        menu.classList.toggle('switch');
        body.classList.toggle('overflow')
    })};