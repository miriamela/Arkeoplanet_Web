"use strict";

const card1 = document.querySelectorAll(".js-card1");
const hiddenSection = document.querySelector(".js-hiddenSection1");
const closeIcon1 = document.querySelector(".js-closeIcon1");

for (let i = 0; i < card1.length; i++) {
  card1[i].addEventListener("click", function () {
    hiddenSection.classList.toggle("hidden");
    // hiddenSection.classList.remove("animationExit");
    hiddenSection.classList.toggle("animationEntrance");
  });
}
function closeSection() {
  hiddenSection.classList.remove("animationEntrance");
  // hiddenSection.classList.add("animationExit");
  hiddenSection.classList.add("hidden");
}

closeIcon1.addEventListener("click", closeSection);

const card2 = document.querySelectorAll(".js-card2");
const hiddenSection2 = document.querySelector(".js-hiddenSection2");
const closeIcon2 = document.querySelector(".js-closeIcon2");

for (let i = 0; i < card2.length; i++) {
  card2[i].addEventListener("click", function () {
    hiddenSection2.classList.toggle("hidden");
    hiddenSection2.classList.toggle("animationEntrance");
  });
}

function closeSection2() {
  hiddenSection2.classList.remove("animationEntrance");
  hiddenSection2.classList.toggle("hidden");
}
closeIcon2.addEventListener("click", closeSection2);
