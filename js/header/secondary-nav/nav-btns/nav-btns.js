import AboutBtns from "./about-btns/about-btns.js";
import JobsBtns from "./jobs-btns/jobs-btns.js";
import ApprenticeshipsBtns from "./apprenticeships-btns/apprenticeships-btns.js";

export const navBtnEls = {
  primaryAboutBtn: document.querySelector("#primary-about-btn"),
  secondaryAboutBtn: document.querySelector("#secondary-about-btn"),

  primaryJobsBtn: document.querySelector("#primary-jobs-btn"),
  secondaryJobsBtn: document.querySelector("#secondary-jobs-btn"),

  primaryApprenticeshipsBtn: document.querySelector("#primary-apprenticeships-btn"),
  secondaryApprenticeshipsBtn: document.querySelector("#secondary-apprenticeships-btn"),
}

export function NavBtns() {
  "use strict";

  console.log(window.innerWidth);
  return [
    AboutBtns(navBtnEls),
    JobsBtns(navBtnEls),
    ApprenticeshipsBtns(navBtnEls),
  ];
}
