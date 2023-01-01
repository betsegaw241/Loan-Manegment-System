'use strict';

const card_container = document.querySelector(".card_container");
//card_container.classList.add("display");

document.querySelector(".users").addEventListener("click", displayUsers);
 document.querySelector(".home").addEventListener("click", displayHome);
document.querySelector(".loan").addEventListener("click", displayLoans);
document.querySelector(".borrowers").addEventListener("click", displayBorrowers);
 

document.querySelector(".menu_btn").addEventListener("click", function () {
    side_bar.classList.toggle("collapsable");
    side_bar.classList.toggle("side_bar");
 });



const users_container = document.querySelector(".table_container");
const borrowers_container = document.querySelector(".borrowers__container");
const loans_container = document.querySelector(".loans__container");
const dash_board = document.querySelector(".dashboard");

const side_bar = document.querySelector(".side_display__bar");

// const open = document.querySelector(".loans__container");
// const close = document.querySelector(".loans__container");




if (window.matchMedia("(min-width: 700px)").matches) { 
users_container.classList.add('view');
borrowers_container.classList.add('view');
    loans_container.classList.add('view');
    side_bar.classList.remove("collapsable");
    
}


function displayUsers() {
   
   
if (window.matchMedia("(max-width: 700px)").matches) {
   side_bar.classList.toggle("collapsable");
    side_bar.classList.toggle("side_bar");
      users_container.classList.remove('view');
    card_container.classList.add('view');
    loans_container.classList.add('view');
    borrowers_container.classList.add('view');
    dash_board.classList.add('view');
} else {
 
    users_container.classList.remove('view');
    card_container.classList.add('view');
    loans_container.classList.add('view');
    borrowers_container.classList.add('view');
 dash_board.classList.add('view');
}

}
function displayHome() {
    if (window.matchMedia("(max-width: 700px)").matches) {
   side_bar.classList.toggle("collapsable");
    side_bar.classList.toggle("side_bar");
    dash_board.classList.remove('view');
    users_container.classList.add('view');
    card_container.classList.remove('view');
    loans_container.classList.add('view');
        borrowers_container.classList.add('view');
    } else {
         users_container.classList.add('view');
    card_container.classList.remove('view');
    loans_container.classList.add('view');
        borrowers_container.classList.add('view');
         dash_board.classList.remove('view');
    }
}
function displayBorrowers() {
    if (window.matchMedia("(max-width: 700px)").matches) {
        side_bar.classList.toggle("collapsable");
        side_bar.classList.toggle("side_bar");
      dash_board.classList.add('view');
        users_container.classList.add('view');
        card_container.classList.add('view');
        loans_container.classList.add('view');
        borrowers_container.classList.remove('view');
    } else {
        
        users_container.classList.add('view');
        card_container.classList.add('view');
        loans_container.classList.add('view');
        borrowers_container.classList.remove('view');
         dash_board.classList.add('view');
    }

}
function displayLoans() {
    if (window.matchMedia("(max-width: 700px)").matches) {
        side_bar.classList.toggle("collapsable");
        side_bar.classList.toggle("side_bar");
     dash_board.classList.add('view');
        users_container.classList.add('view');
        card_container.classList.add('view');
        loans_container.classList.remove('view');
        borrowers_container.classList.add('view');
    } else {
         users_container.classList.add('view');
        card_container.classList.add('view');
        loans_container.classList.remove('view');
        borrowers_container.classList.add('view');
         dash_board.classList.add('view');
    }
}