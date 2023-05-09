"use strict";
// global variabal
let click_My = document.querySelector(".clickMy");
let portfolio_cont = document.querySelector(".portfolio-cont");
// tool bar
let toolBar = document.querySelector(".tool-bar");
let colorLi = document.querySelectorAll(".colors-list li");
let spanBG = document.querySelectorAll(".randomBack span");

//// for remove all active class
function removeActiveOnly(eles) {
  eles.forEach((ele) => {
    ele.classList.remove("active");
  });
}
function handelActive(eles, e) {
  removeActiveOnly(eles);
  e.target.classList.add("active");
}
//side bar option
let sideBarContainer = document.querySelector(".side-bar");
let spanSD = document.querySelectorAll(".sideCont span");
//gallery
let img_modal = document.querySelector(" .modal");
const overlay = document.querySelector(".overlay");
// CLOSE
const closeModal = function () {
  overlay.classList.add("hidden");
  img_modal.classList.add("hidden");
};
const openModal = function () {
  overlay.classList.remove("hidden");
  img_modal.classList.remove("hidden");
};
let eventEx = true; //to execution event one time
click_My.addEventListener("click", function () {
  if (eventEx) {
    let imgarr = [];
    // for render img
    for (let i = 0; i < 18; i++) {
      let img = `img/random/random${i + 1}.jpg`;
      let newCard = document.createElement("div");

      newCard.classList.add("card");
      // newCard.classList.add(`cr${i + 1}`);
      newCard.innerHTML = `<img src="${img}">`;

      imgarr.push(newCard.innerHTML);
      portfolio_cont.appendChild(newCard);
    }
    let img_cr = document.querySelectorAll(".card");
    //for overlay and modal
    for (let j = 0; j < img_cr.length; j++) {
      img_cr[j].addEventListener("click", function () {
        openModal();
        img_modal.innerHTML = imgarr[j];

        window.document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        });
      });
    }
    // to close
    overlay.addEventListener("click", closeModal);
    eventEx = false;
  } else {
    this.style.cssText = "cursor: not-allowed;";
    alert("your aready see the content ");
  }
});
//flag section transtion
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    handelActive(panels, e);
  });
});
//flag
