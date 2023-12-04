// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}






//Image slideshow script
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





// SCRIPT FOR LOGIN AND BOOK FORM
const loginButton = document.getElementById("login");
const overlay = document.getElementById("overlay");
const bookingPopup = document.getElementById("bookingPopup");
const bookButton = document.getElementById("book");

function openPopup() {
  overlay.style.display = "block";
  bookingPopup.style.display = "block";
}

function closePopup() {
  overlay.style.display = "none";
  bookingPopup.style.display = "none";
}

function bookNow() {
  closePopup();
  alert("You have successfully booked now!");
}

loginButton.addEventListener("click", openPopup);
bookButton.addEventListener("click", bookNow);

