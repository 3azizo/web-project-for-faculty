// function removeActiveOnly(eles) {
//   eles.forEach((ele) => {
//     ele.classList.remove("active");
//   });
// }
let spanNavOption = document.querySelectorAll(".Navbar_option span");
// for use headroom
let header = document.getElementById("header");
let headroom = new Headroom(header);
headroom.init();

//get data from localStorage
if (localStorage.getItem("navOption") === "yes") {
  headroom.unfreeze();
  removeActiveOnly(spanNavOption);
  document.querySelector(".Navbar_option .yes").classList.add("active");
} else {
  headroom.freeze();
  removeActiveOnly(spanNavOption);
  document.querySelector(".Navbar_option .no").classList.add("active");
}

//add event to span to take action
spanNavOption.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    //to handel class active
    removeActiveOnly(spanNavOption);
    e.target.classList.add("active");
    // to make action
    if (ele.classList.contains("yes")) {
      headroom.unfreeze();
      localStorage.setItem("navOption", "yes");
    } else {
      headroom.freeze();
      localStorage.setItem("navOption", "no");
    }
  });
});
