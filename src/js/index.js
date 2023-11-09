document.addEventListener("DOMContentLoaded", () => {

  //HEADER

  const elements = {

    btns: {
      menuMoreBtn: {
        menuBtn: document.querySelector("#menu-btn"),
        moreBtn: document.querySelector("#more-btn"),
      },
    },
    arrowUpDown: document.querySelector("#arrow-up-down"),
    primaryNavContent: document.querySelector("#primary-nav-content"),
    moreNavContent: document.querySelector("#more-nav-content"),
    primaryNavSVGs: document.querySelectorAll("#primary-nav svg"),


    //Menu & More Button functionality
    menuMoreBtnFn() {
      for (let btn in this.btns.menuMoreBtn) {
        this.btns.menuMoreBtn[btn].addEventListener("click", () => {
          this.btns.menuMoreBtn.menuBtn.classList.toggle("text-background")
          this.arrowUpDown.classList.toggle("-rotate-180")

          this.primaryNavContent.classList.toggle("-translate-y-full")

          this.btns.menuMoreBtn.moreBtn.classList.toggle("after:content-['+']")
          this.btns.menuMoreBtn.moreBtn.classList.toggle("after:content-['-']")
          this.moreNavContent.classList.toggle("lg:hidden")

          for (let svgEl of this.primaryNavSVGs) {
            svgEl.classList.toggle("fill-background");
            svgEl.classList.toggle("fill-text")
          }

          //Accessibility
          let currentAriaExpanded = this.btns.menuMoreBtn[btn].getAttribute("aria-expanded");
          let newAriaExpanded = currentAriaExpanded == 'false' ? 'true' : 'false';
          this.btns.menuMoreBtn[btn].setAttribute("aria-expanded", newAriaExpanded);
          console.log(newAriaExpanded)
        });
      }
    }
  }


  elements.menuMoreBtnFn()




})