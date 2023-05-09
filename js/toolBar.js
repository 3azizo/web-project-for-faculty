// for see tool box
document.querySelector(".toggle-settings i").onclick = function () {
  this.classList.toggle("fa-spin");
  toolBar.classList.toggle("open");
};
//localstorage
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
// frist options
//option color switch colors
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
// optopns two random background img
////////////////////////background////////////////////
let backgroundOption = true;
let clearKey;
spanBG.forEach((span) => {
  // span.classList.remove("active");
  span.onclick = function (e) {
    //remove active
    handelActive(spanBG, e);

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
    }, 3000);
  }
}
randomBg();

// option 3: side bar
let allSection = document.querySelectorAll("body > .section");
allSection.forEach((ele) => {
  let sideBox = document.createElement("div");
  sideBox.classList = "side-box";
  sideBox.dataset.id = ele.id;

  let spanInSide = document.createElement("span");
  spanInSide.textContent = `${ele.id}`;
  sideBox.appendChild(spanInSide);

  sideBarContainer.appendChild(sideBox);
  sideBox.addEventListener("click", (e) => {
    // handelActive(document.querySelectorAll(".side-box"), e);
    document.querySelector(`#${ele.id}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// when go to section and handling active class in link
let menu = document.querySelectorAll("header .links a");
window.addEventListener("scroll", () => {
  allSection.forEach((ele) => {
    let top = window.scrollY;
    let offset = ele.offsetTop - 150;
    let height = ele.offsetHeight;
    let id = ele.getAttribute("id");
    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        //navbar
        link.classList.remove("active");
        document
          .querySelector("header .links a[href*=" + id + "]")
          .classList.add("active");
        //side bar
        removeActiveOnly(document.querySelectorAll(".side-box"));
        document
          .querySelector(".side-box[data-id*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
