
document.addEventListener("DOMContentLoaded", loadImageThumbs);

function loadImageThumbs() {
  var imageThumbs = document.getElementById("image-thumbs");
  var currentImage = document.getElementById("current-image"); 

  var currentThumbWidths = 0px;
  
  for (var i = 1; i <= 15; i++) {
    var thumb = document.createElement("img");
    thumb.src = "Images/image" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.addEventListener(
      "click", function() {
        currentImage.src = this.src;
        currentImage.alt = this.alt;
      }
    );
  
    thumb.classList.add("thumb");

    if(currentThumbWidths + thumb.width > window.getComputedStyle(imageThumbs.parentNode, null).width ) {
      imageThumbs.appendChild( document.createElement("br") );  
      
      currentThumbWidths = 0;
    }
    
    imageThumbs.appendChild(thumb);
    currentThumbWidths += thumb.width;

    console.log("max Width of parent = " + window.getComputedStyle(imageThumbs.parentNode, null).width );
    console.log("currentThumbWidths = " + currentThumbWidths);
  }

}


// Old codde

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
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
