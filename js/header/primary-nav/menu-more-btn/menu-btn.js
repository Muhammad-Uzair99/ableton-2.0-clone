import MenuBtnFunc from "./btn-functions/menu-btn-func.js";
import PrimaryNavAccessibility from "./btn-functions/accessibility-func.js";
import MoreBtnFunc from "./btn-functions/more-btn-func.js";

export default function MenuBtn() {
  "use strict";

  const menuBtnEl = document.querySelector("#menu-btn");

  return (menuBtnEl.addEventListener("click", () => {

    MenuBtnFunc();
    PrimaryNavAccessibility();
    MoreBtnFunc();

  }));
}