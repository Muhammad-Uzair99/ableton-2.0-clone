import PrimaryNav from "./primary-nav/primary-nav.js";
import SecondaryNav from "./secondary-nav/secondary-nav.js";

export default function Header() {
  "use strict";
  return [
    PrimaryNav(),
    SecondaryNav(),
  ];
}