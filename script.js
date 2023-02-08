"use strict";
// global variabal
let main_h = document.getElementById("main_h");
let main_p = document.getElementById("main_p");
let click_My = document.querySelector(".clickMy");
let portfolio_cont = document.querySelector(".portfolio-cont");
//// for remove all active class
function handelActive(eles, e) {
  eles.forEach((ele) => {
    ele.classList.remove("active");
  });
  e.target.classList.add("active");
}
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
    handelActive(colorLi, e);
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
    handelActive(spanBG, e);
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
//side bar option
let spanSD = document.querySelectorAll(".sideCont span");
spanSD.forEach((span) => {
  // span.classList.remove("active");
  span.onclick = function (e) {
    //remove active
    handelActive(spanSD, e);
    sideBarContainer.classList.toggle("hidden");
  };
});

//change mode
document.querySelector(".mode").addEventListener("click", (e) => {
  e.target.classList.toggle("fa-lightbulb");
  e.target.classList.toggle("fa-moon");
  e.target.classList.toggle("bg");
  document.body.classList.toggle("dark");
});
// tool bar

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
  //test
});
//flag
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    handelActive(panels, e);
  });
});
//flag
//side bar
let sideBarContainer = document.querySelector(".side-bar");
let allSection = document.querySelectorAll("body > .section");
allSection.forEach((ele) => {
  let sideBox = document.createElement("div");
  sideBox.classList = "side-box";
  let spanInSide = document.createElement("span");
  spanInSide.textContent = `${ele.id}`;
  sideBox.appendChild(spanInSide);
  sideBarContainer.appendChild(sideBox);
  sideBox.addEventListener("click", (e) => {
    handelActive(document.querySelectorAll(".side-box"), e);
    document.querySelector(`#${ele.id}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
//side bar
