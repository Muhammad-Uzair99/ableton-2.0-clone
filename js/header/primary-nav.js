export default function PrimaryNav () {
  "use strict";

  const menuBtnEl = document.querySelector("#menu-btn");

  menuBtnEl.addEventListener("click", () => {
    menuBtnArrow();
    textColorToggler();
    svgFillToggler();
    navContentDispalyer();

    moreBtnPlusMinusToggler();
    navContentDispalyerLgScreen();
  });

  const moreBtnEl = document.querySelector("#more-btn");

  moreBtnEl.addEventListener("click", () => {
    moreBtnPlusMinusToggler();
    navContentDispalyerLgScreen();

    menuBtnArrowToggler();
    textColorToggler();
    svgFillToggler();
    navContentDispalyer();
  });
  
  return moreBtnEl;
}

// Screen size < 1024px Primary Nav Code

function menuBtnArrowToggler() {
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

// Large Screen Primary Nav Code

function moreBtnPlusMinusToggler() {
  const moreBtnClasses = document.querySelector("#more-btn").classList;

  moreBtnClasses.toggle("after:content-['+']");
  moreBtnClasses.toggle("after:content-['-']")
}

function navContentDispalyerLgScreen() {
  const moreNavContentElClasses = document.querySelector("#more-nav-content").classList;

  moreNavContentElClasses.toggle("lg:hidden");
}