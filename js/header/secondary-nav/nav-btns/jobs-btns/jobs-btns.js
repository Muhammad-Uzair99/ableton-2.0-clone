export default function JobsBtns({
  primaryAboutBtn, 
  secondaryAboutBtn, 
  primaryJobsBtn, 
  secondaryJobsBtn, 
  primaryApprenticeshipsBtn, 
  secondaryApprenticeshipsBtn
}){
  primaryJobsBtn.addEventListener("click", () => {
    btnColorToggler({
      primaryAboutBtn, 
      secondaryAboutBtn, 
      primaryJobsBtn, 
      secondaryJobsBtn, 
      primaryApprenticeshipsBtn, 
      secondaryApprenticeshipsBtn
    }) 
  })

  secondaryJobsBtn.addEventListener("click", () => {
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

    primaryJobsBtn.classList.add("text-text", "lg:text-primary");
    secondaryJobsBtn.classList.add("text-primary");
    
    primaryApprenticeshipsBtn.classList.remove("text-text", "lg:text-primary");
    secondaryApprenticeshipsBtn.classList.remove("text-primary");
}