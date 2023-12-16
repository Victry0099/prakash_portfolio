let burger = document.querySelector(".burger");
let ul = document.querySelector(".nav-list");
let navLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  ul.classList.toggle("showData");
});

// Adding click event listeners to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Toggle the class when any navigation link is clicked
    ul.classList.toggle("showData");
  });
});