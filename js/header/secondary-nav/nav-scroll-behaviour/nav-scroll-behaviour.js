export default function NavScrollBehaviour() {
  "use strict";
  return [
    navBehaviour(),
    window.addEventListener("resize", () => navBehaviour()),
  ]
}

function navBehaviour() {
  const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
  let prevWindowScrollY = 0
  
  window.addEventListener("scroll", () => {
    const headerSize = document.querySelector("#header").offsetHeight / rootFontSize;
    const currentWindowScrollY = window.scrollY / rootFontSize;

    const secondaryNavElClasses = document.querySelector("#secondary-nav").classList;

    if(currentWindowScrollY >= headerSize) {
      secondaryNavElClasses.add("fixed", "top-0", "-translate-y-full");

      if(currentWindowScrollY < prevWindowScrollY) {
        secondaryNavElClasses.remove("-translate-y-full");
      }

    } else {
      secondaryNavElClasses.remove("fixed", "top-0", "-translate-y-full");
    }

    prevWindowScrollY = currentWindowScrollY;

  });
}