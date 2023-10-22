import MoreBtnFunc from "./btn-functions/more-btn-func.js";
import PrimaryNavAccessibility from "./btn-functions/accessibility-func.js";
import MenuBtnFunc from "./btn-functions/menu-btn-func.js";

export default function MoreBtn() {

  const moreBtnEl = document.querySelector("#more-btn");

  moreBtnEl.addEventListener("click", () => {

    MoreBtnFunc();
    PrimaryNavAccessibility();
    MenuBtnFunc();

  });
}
