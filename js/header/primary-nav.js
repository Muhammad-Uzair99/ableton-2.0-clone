export default function PrimaryNav () {
  "use strict";

  const menuBtnEl = document.querySelector("#menu-btn");

  menuBtnEl.addEventListener("click", () => {
    menuBtnArrow();
    textColorToggler();
    svgFillToggler();
    navContentDispalyer();
  });
  
  return menuBtnEl;
}

function menuBtnArrow() {
  const arrowUpDownElClasses = document.querySelector("#arrow-up-down").classList;
  
  arrowUpDownElClasses.toggle("-rotate-180");
}


function textColorToggler() {
  const primaryNavElClasses = document.querySelector("#primary-nav").classList;
  
  primaryNavElClasses.toggle("text-background");
}

function svgFillToggler() {
  const navSvgEls = document.querySelectorAll("#primary-nav svg");

  for (let svgEl of navSvgEls) {
    svgEl.classList.toggle("fill-background");
    svgEl.classList.toggle("fill-text")
  }

}

function navContentDispalyer() {
  const primaryNavContentElClasses = document.querySelector("#primary-nav-content").classList;

  primaryNavContentElClasses.toggle("-translate-y-full");
}