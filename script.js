   // Initialize Typed.js with your desired options
   var typed = new Typed('.text', {
    strings: ["Full-Stack Developer", "Gamer", "Data Science"],
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 100, // Backspacing speed in milliseconds
    backDelay: 1000, // Delay before starting to backspace
    loop: true, // Loop the animation
 });
//  burger =document.querySelector('.burger')
//  navbar =document.querySelector('.navbar')
//  navList =document.querySelector('.nav-list')
// //  burger =document.querySelector('.burger')


//  burger.addEventListener('click',()=>{
//     navList.classList.toggle('visiblity-res')

    
//  })

  // Get the menu button element
// var menuButton = document.querySelector(".burger");

// // Get the nav-list element
// var navList = document.querySelector(".nav-list");

// // Get the links element
// var links = document.querySelectorAll(".hide-res");

// // Add a click event listener to each link
// links.forEach(function(link) {
//   link.addEventListener("click", function() {
//     // Set the opacity of the nav-list to 0
//     navList.style.opacity = 0;
//     // Remove the active class from the menu button
//     menuButton.classList.remove("active");
//   });
// });

// // Add a click event listener to the menu button
// menuButton.addEventListener("click", function() {
//   // Toggle the active class on the menu button
//   menuButton.classList.toggle("active");
//   // Toggle the opacity of the nav-list
//   if (navList.style.opacity == 0) {
//     navList.style.opacity = 1;
//   } else {
//     navList.style.opacity = 0;
//   }

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
