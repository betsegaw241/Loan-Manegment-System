"use strict";

const card_container = document.querySelector(".card_container");

document.querySelector(".payment").addEventListener("click", displaypayment);
document.querySelector(".home").addEventListener("click", displayHome);
document.querySelector(".loanApp").addEventListener("click", displayloanApp);

document.querySelector(".menu_btn").addEventListener("click", function () {
  side_bar.classList.toggle("collapsable");
  side_bar.classList.toggle("side_bar");
});

const users_container = document.querySelector(".table_container");
const borrowers_container = document.querySelector(".borrowers__container");
const dash_board = document.querySelector(".dashboard");

const side_bar = document.querySelector(".side_display__bar");

if (window.matchMedia("(min-width: 700px)").matches) {
  users_container.classList.add("view");
  borrowers_container.classList.add("view");
  side_bar.classList.remove("collapsable");
}

function displaypayment() {
  if (window.matchMedia("(max-width: 700px)").matches) {
    side_bar.classList.toggle("collapsable");
    side_bar.classList.toggle("side_bar");
    users_container.classList.remove("view");
    card_container.classList.add("view");
    borrowers_container.classList.add("view");
    dash_board.classList.add("view");
  } else {
    users_container.classList.remove("view");
    card_container.classList.add("view");
    borrowers_container.classList.add("view");
    dash_board.classList.add("view");
  }
}
function displayHome() {
  if (window.matchMedia("(max-width: 700px)").matches) {
    side_bar.classList.toggle("collapsable");
    side_bar.classList.toggle("side_bar");
    dash_board.classList.remove("view");
    users_container.classList.add("view");
    card_container.classList.remove("view");
    borrowers_container.classList.add("view");
  } else {
    users_container.classList.add("view");
    card_container.classList.remove("view");
    borrowers_container.classList.add("view");
    dash_board.classList.remove("view");
  }
}
function displayloanApp() {
  if (window.matchMedia("(max-width: 700px)").matches) {
    side_bar.classList.toggle("collapsable");
    side_bar.classList.toggle("side_bar");
    dash_board.classList.add("view");
    users_container.classList.add("view");
    card_container.classList.add("view");
    borrowers_container.classList.remove("view");
  } else {
    users_container.classList.add("view");
    card_container.classList.add("view");
    borrowers_container.classList.remove("view");
    dash_board.classList.add("view");
  }
}
