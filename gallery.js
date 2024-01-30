
document.addEventListener("DOMContentLoaded", loadImageThumbs);

//Change number when adding phtots
var numberOfImages = 15;

var imagesArray= [];

function loadImageThumbs() {
  var imageThumbs = document.getElementById("image-thumbs");
  var currentImage = document.getElementById("current-image"); 
  

  var currentThumbWidths = 0;


  
  for (var i = 1; i <= numberOfImages; i++) {
    var thumb = document.createElement("img");
    thumb.src = "Images/image" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.setAttribute("data-imageid", i);

    EXIF.getData(thumb, function() {
      console.log("trying to get exif data...");
      this.setAttribute("data-imageName", EXIF.getTag(this, "ImageDescription"));
      console.log(JSON.stringify(EXIF.getAllTags(this), null, "\t"));
    }
                 );
    
    thumb.addEventListener(
      "click", function() {
        setCurrentImage(this.getAttribute("data-imageid"));
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

    imagesArray[i - 1] = thumb;

  }

  setCurrentImage(1);

}

function plusSlides(n) {
  var currentImage = document.getElementById("current-image"); 

  var currentImageID = parseInt(currentImage.getAttribute("data-imageid"), 10);

  currentImageID += parseInt(n, 10);
  currentImageID--;
  currentImageID = currentImageID % numberOfImages;
  currentImageID++;

  if(currentImageID == 0) {
    currentImageID = numberOfImages;
  }

  setCurrentImage(currentImageID);
  
}

function setCurrentImage(currentImageID) {
  var currentImage = document.getElementById("current-image"); 

  currentImage.src = "Images/image" + currentImageID + ".jpg";
  currentImage.alt = "Image " + currentImageID;
  currentImage.setAttribute("data-imageid", currentImageID);

  var currentImageName = document.getElementById("image-gallery-name");

  currentImageName.innerHTML = imagesArray[currentImageID - 1].getAttribute("data-imageName");
}
  

// Old codde

/*let slideIndex = 1;
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
}*/
