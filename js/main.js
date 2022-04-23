const burger = document.querySelector(".span");
const menu = document.querySelector(".menu_header");
const eye = document.querySelector(".eye");
const body = document.querySelector("body");
const header = document.querySelector("header");



function burgerMenu() {
    menu.classList.toggle("none");
    eye.classList.toggle("none");
    body.classList.toggle("noScroll")
    burger.classList.toggle("rotate");
}

function eyE() {
    body.classList.toggle("bg_eye");
    header.classList.toggle("bg_eye");
    menu.classList.toggle("bg_eye");
}