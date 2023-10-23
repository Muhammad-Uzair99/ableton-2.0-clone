export default function NavBtns() {
  "use strict";

  const navBtnEls = {
    primaryAboutBtn: document.querySelector("#primary-about-btn"),
    secondaryAboutBtn: document.querySelector("#secondary-about-btn"),

    primaryJobsBtn: document.querySelector("#primary-jobs-btn"),
    secondaryJobsBtn: document.querySelector("#secondary-jobs-btn"),

    primaryApprenticeshipsBtn: document.querySelector("#primary-apprenticeships-btn"),
    secondaryApprenticeshipsBtn: document.querySelector("#secondary-apprenticeships-btn"),
  }

  console.log(window.innerWidth);
  return [
    navbtnColorToggler(navBtnEls),
  ];
}

function navbtnColorToggler({
  primaryAboutBtn, 
  secondaryAboutBtn, 
  primaryJobsBtn, 
  secondaryJobsBtn, 
  primaryApprenticeshipsBtn, 
  secondaryApprenticeshipsBtn
}) {
  primaryAboutBtn.addEventListener("click", () => {
    primaryAboutBtn.classList.add("text-text", "lg:text-primary");
    secondaryAboutBtn.classList.add("text-primary");

    primaryJobsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryJobsBtn.classList.remove("text-primary");
    
    
    primaryApprenticeshipsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryApprenticeshipsBtn.classList.remove("text-primary");
  })
  secondaryAboutBtn.addEventListener("click", () => {
    primaryAboutBtn.classList.add("text-text", "lg:text-primary");
    secondaryAboutBtn.classList.add("text-primary");

    primaryJobsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryJobsBtn.classList.remove("text-primary");
    
    primaryApprenticeshipsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryApprenticeshipsBtn.classList.remove("text-primary");
  })

  // jobs
  primaryJobsBtn.addEventListener("click", () => {
    primaryAboutBtn.classList.remove("text-text", "lg:text-primary");
    secondaryAboutBtn.classList.remove("text-primary");

    primaryJobsBtn.classList.add("text-text", "lg:text-primary");
    secondaryJobsBtn.classList.add("text-primary");
    
    primaryApprenticeshipsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryApprenticeshipsBtn.classList.remove("text-primary");
  })
  secondaryJobsBtn.addEventListener("click", () => {
    primaryAboutBtn.classList.remove("text-text", "lg:text-primary");
    secondaryAboutBtn.classList.remove("text-primary");

    primaryJobsBtn.classList.add("text-text", "lg:text-primary");
    secondaryJobsBtn.classList.add("text-primary");
    
    primaryApprenticeshipsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryApprenticeshipsBtn.classList.remove("text-primary");
  })

  //Appp
  primaryApprenticeshipsBtn.addEventListener("click", () => {
    primaryAboutBtn.classList.remove("text-text", "lg:text-primary");
    secondaryAboutBtn.classList.remove("text-primary");

    primaryJobsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryJobsBtn.classList.remove("text-primary");
    
    primaryApprenticeshipsBtn.classList.add("text-text", "lg:text-primary");
    secondaryApprenticeshipsBtn.classList.add("text-primary");
  })
  secondaryApprenticeshipsBtn.addEventListener("click", () => {
    primaryAboutBtn.classList.remove("text-text", "lg:text-primary");
    secondaryAboutBtn.classList.remove("text-primary");

    primaryJobsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryJobsBtn.classList.remove("text-primary");
    
    primaryApprenticeshipsBtn.classList.add("text-text", "lg:text-primary");
    secondaryApprenticeshipsBtn.classList.add("text-primary");
  })
}