"use strict";
// global variabal
let main_h = document.getElementById("main_h");
let main_p = document.getElementById("main_p");
let click_My = document.querySelector(".clickMy");
let portfolio_cont = document.querySelector(".portfolio-cont");
//
// tool bar
let toolBar = document.querySelector(".tool-bar");
// for see tool box
document.querySelector(".toggle-settings i").onclick = function () {
  this.classList.toggle("fa-spin");
  toolBar.classList.toggle("open");
};
//option color switch colors
const colorLi = document.querySelectorAll(".colors-list li");
// for remove all active class
function removeLiActive() {
  colorLi.forEach((li) => {
    li.classList.remove("active");
  });
}
// get color from local Storage
if (localStorage.getItem("mainColor")) {
  let mainColor = localStorage.getItem("mainColor");
  document.documentElement.style.setProperty("--mainColor", mainColor);
  colorLi.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
}
// add Event to li
colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    removeLiActive();
    e.target.classList.add("active");
    console.log(e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--mainColor",
      e.target.dataset.color
    );
    localStorage.setItem("mainColor", e.target.dataset.color);
  });
});
////////////////////////background////////////////////
let backgroundOption = true;
let clearKey;
let spanBG = document.querySelectorAll(".randomBack span");
spanBG.forEach((span) => {
  // span.classList.remove("active");
  span.onclick = function (e) {
    //remove active
    spanBG.forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");
    //
    if (span.dataset.bg == "yes") {
      backgroundOption = true;
      randomBg();
    } else {
      backgroundOption = false;
      document.querySelector("#home").style.backgroundImage =
        "url(img/main_img.jpg)";
      clearInterval(clearKey);
      randomBg();
    }
  };
});

function randomBg() {
  if (backgroundOption == true) {
    clearKey = setInterval(function () {
      let randomNum = Math.floor(Math.random() * 17);
      let img = `img/random/random${randomNum + 1}.jpg`;
      document.querySelector("#home").style.backgroundImage = `url(${img})`;
    }, 10000);
  }
}
randomBg();
// tool bar
click_My.addEventListener("click", function () {
  let imgarr = [];
  let img_modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const openModal = function () {
    overlay.classList.remove("hidden");
    img_modal.classList.remove("hidden");
  };
  for (let i = 0; i < 18; i++) {
    let img = `img/random/random${i + 1}.jpg`;
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.classList.add(`cr${i + 1}`);
    newCard.innerHTML = `<img src="${img}">`;
    imgarr.push(newCard.innerHTML);
    portfolio_cont.appendChild(newCard);
  }
  let img_cr = document.querySelectorAll(".card");
  for (let j = 0; j < img_cr.length; j++) {
    img_cr[j].addEventListener("click", function () {
      openModal();
      console.log(imgarr);
      img_modal.innerHTML = imgarr[j];
    });
  }
  // CLOSE
  const closeModal = function () {
    overlay.classList.add("hidden");
    img_modal.classList.add("hidden");
  };
  overlay.addEventListener("click", closeModal);
  //test
});
//flag
const panels = document.querySelectorAll(".panel");
panels.forEach((panels) => {
  panels.addEventListener("click", () => {
    removactive();
    panels.classList.add("active");
  });
});
function removactive() {
  panels.forEach((panels) => {
    panels.classList.remove("active");
  });
}
//flag
