export default function MoreBtnFunc () {
  return [
    moreBtnPlusMinusToggler(),
    navContentDispalyerLgScreen(),
  ];
}

function moreBtnPlusMinusToggler() {
  const moreBtnClasses = document.querySelector("#more-btn").classList;

  moreBtnClasses.toggle("after:content-['+']");
  moreBtnClasses.toggle("after:content-['-']")
}

function navContentDispalyerLgScreen() {
  const moreNavContentElClasses = document.querySelector("#more-nav-content").classList;

  moreNavContentElClasses.toggle("lg:hidden");
}