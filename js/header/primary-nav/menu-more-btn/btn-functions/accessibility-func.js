export default function PrimaryNavAccessibility() {

  return [
    btnAccessibility(),
    navAccebility(),
  ];
}

function btnAccessibility() {

  const menuBtnEl = document.querySelector("#menu-btn");
  const moreBtnEl = document.querySelector("#more-btn");

  btnAriaToggler(menuBtnEl, moreBtnEl);
}

function navAccebility() {

  const primaryNavContentEl = document.querySelector("#primary-nav-content");
  const moreNavContentEl = document.querySelector("#more-nav-content");

  navAriaToggler(primaryNavContentEl, moreNavContentEl);
}

function btnAriaToggler(...btns) {

  for (let btn of btns) {
    
    let currentAriaExpanded = btn.getAttribute("aria-expanded");

    let newAriaExpanded = currentAriaExpanded === 'false' ? "true" : "false";

    btn.setAttribute("aria-expanded", newAriaExpanded);
  }
}

function navAriaToggler(...navEls) {

  for (let navEl of navEls) {
    
    let currentAriaHidden = navEl.getAttribute("aria-hidden");
    
    let newAriaHidden = currentAriaHidden === "false" ? "true" : "false";

    navEl.setAttribute("aria-hidden", newAriaHidden);
  }

}
