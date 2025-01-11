 
 
 
 

 
 
 
 
 

 
 
 
 

 
function openLoginForm() {
  document.getElementById("myFormlogin").style.display = "block";
}

function closeLoginForm() {
  document.getElementById("myFormlogin").style.display = "none";
}

function openLogoutForm() {
  document.getElementById("myFormlogout").style.display = "block";
}

function closeLogoutForm() {
  document.getElementById("myFormlogout").style.display = "none";
}



 
let slideIndex = 1;
showSlides(slideIndex);

const slideInterval = 3000;  
let autoSlide;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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

 
function startAutoSlide() {
  autoSlide = setInterval(function () {
    plusSlides(1);  
  }, slideInterval);
}

 
function stopAutoSlide() {
  clearInterval(autoSlide);
}

 
startAutoSlide();

