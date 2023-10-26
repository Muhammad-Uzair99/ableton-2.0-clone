import NavScrollBehaviour from "./nav-scroll-behaviour/nav-scroll-behaviour.js";
import { NavBtns } from "./nav-btns/nav-btns.js";

export default function SecondaryNav() {
  "use strict";

  return  [
    NavBtns(),
    NavScrollBehaviour(),
  ];
}