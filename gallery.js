
document.addEventListener("DOMContentLoaded", loadImageThumbs);

var numberOfImages = 15;

function loadImageThumbs() {
  var imageThumbs = document.getElementById("image-thumbs");
  var currentImage = document.getElementById("current-image"); 

  var currentThumbWidths = 0;
  
  for (var i = 1; i <= numberOfImages; i++) {
    var thumb = document.createElement("img");
    thumb.src = "Images/image" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.addEventListener(
      "click", function() {
        currentImage.src = this.src;
        currentImage.alt = this.alt;
        currentImage.setAttribute("data-imageid", i);
      }
    );
  
    thumb.classList.add("thumb");

    if(currentThumbWidths + thumb.width > parseInt(window.getComputedStyle(imageThumbs.parentNode, null).width, 10) ) {
      imageThumbs.appendChild( document.createElement("br") );  
      
      currentThumbWidths = 0;
    }
    
    imageThumbs.appendChild(thumb);
    currentThumbWidths += thumb.width;

    console.log("max Width of parent = " + parseInt(window.getComputedStyle(imageThumbs.parentNode, null).width, 10) );
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
