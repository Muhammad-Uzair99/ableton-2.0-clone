export default function AboutBtns({
  primaryAboutBtn, 
  secondaryAboutBtn, 
  primaryJobsBtn, 
  secondaryJobsBtn, 
  primaryApprenticeshipsBtn, 
  secondaryApprenticeshipsBtn
}) {
  
  primaryAboutBtn.addEventListener("click", () => {
    btnColorToggler({
      primaryAboutBtn, 
      secondaryAboutBtn, 
      primaryJobsBtn, 
      secondaryJobsBtn, 
      primaryApprenticeshipsBtn, 
      secondaryApprenticeshipsBtn
    });
  });

  secondaryAboutBtn.addEventListener("click", () => {
    btnColorToggler({
      primaryAboutBtn, 
      secondaryAboutBtn, 
      primaryJobsBtn, 
      secondaryJobsBtn, 
      primaryApprenticeshipsBtn, 
      secondaryApprenticeshipsBtn
    });
  });
}

function btnColorToggler({
  primaryAboutBtn, 
  secondaryAboutBtn, 
  primaryJobsBtn, 
  secondaryJobsBtn, 
  primaryApprenticeshipsBtn, 
  secondaryApprenticeshipsBtn
}) {
  primaryAboutBtn.classList.add("text-text", "lg:text-primary");
  secondaryAboutBtn.classList.add("text-primary");

  primaryJobsBtn.classList.remove("text-text", "lg:text-primary");
  secondaryJobsBtn.classList.remove("text-primary");
  
  
  primaryApprenticeshipsBtn.classList.remove("text-text", "lg:text-primary");
  secondaryApprenticeshipsBtn.classList.remove("text-primary");
}
