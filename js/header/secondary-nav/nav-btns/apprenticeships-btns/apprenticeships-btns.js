export default function ApprenticeshipsBtns({
  primaryAboutBtn, 
  secondaryAboutBtn, 
  primaryJobsBtn, 
  secondaryJobsBtn, 
  primaryApprenticeshipsBtn, 
  secondaryApprenticeshipsBtn
}){
  primaryApprenticeshipsBtn.addEventListener("click", () => {
    btnColorToggler({
      primaryAboutBtn, 
      secondaryAboutBtn, 
      primaryJobsBtn, 
      secondaryJobsBtn, 
      primaryApprenticeshipsBtn, 
      secondaryApprenticeshipsBtn
    }) 
  })

  secondaryApprenticeshipsBtn.addEventListener("click", () => {
    btnColorToggler({
      primaryAboutBtn, 
      secondaryAboutBtn, 
      primaryJobsBtn, 
      secondaryJobsBtn, 
      primaryApprenticeshipsBtn, 
      secondaryApprenticeshipsBtn
    }) 
  })
}

function btnColorToggler({
  primaryAboutBtn, 
  secondaryAboutBtn, 
  primaryJobsBtn, 
  secondaryJobsBtn, 
  primaryApprenticeshipsBtn, 
  secondaryApprenticeshipsBtn
}) {
  primaryAboutBtn.classList.remove("text-text", "lg:text-primary");
  secondaryAboutBtn.classList.remove("text-primary");

  primaryJobsBtn.classList.remove("text-text", "lg:text-primary");
  secondaryJobsBtn.classList.remove("text-primary");
  
  primaryApprenticeshipsBtn.classList.add("text-text", "lg:text-primary");
  secondaryApprenticeshipsBtn.classList.add("text-primary");
}