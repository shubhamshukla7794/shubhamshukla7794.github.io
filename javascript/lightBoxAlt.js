//---------------------------------------------------------------------------------------------------------
//                                          L I G H T B O X
//---------------------------------------------------------------------------------------------------------

const lightbox = document.querySelector(".img-container .lightbox");
const lightboxImage = document.querySelector(".img-container .lightbox img");
const lightboxTitle = document.querySelector(".img-container .lightbox .title");
const nextBtn = document.querySelector(".img-container .next-btn");
const previousBtn = document.querySelector(".img-container .previous-btn");
const closeBtn = document.querySelector(".img-container .close-btn");
const firstImg = document.querySelector(".img-container .first");
const lastImg = document.querySelector(".img-container .last");

let currentImage = "";

const showImage = (data) => {
    currentImage = data;
    if (!(currentImage.previousElementSibling)) {
        firstImage = data;
    }
    if (!(currentImage.nextElementSibling)) {
        lastImage = data;
    }
    lightbox.classList.add("active");
    let image = data.querySelector("img");
    let title = data.querySelector(".title").innerText;
    console.log(image.classList.contains("big")) ;

    lightboxImage.src = image.src;

    if (image.classList.contains("big")) {
      lightboxImage.classList.add("big");
    }else{
      lightboxImage.classList.remove("big");
    }

    if (title) {
        lightboxTitle.innerText = title;
    }
};

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
    if (currentImage.nextElementSibling) {
        currentImage = currentImage.nextElementSibling;
        showImage(currentImage);
    } else {
      showImage(firstImg);
  }
});

previousBtn.addEventListener("click", () => {
    if (currentImage.previousElementSibling) {
        currentImage = currentImage.previousElementSibling;
        showImage(currentImage);
    } else {
      showImage(lastImg);
  }
});

lightbox.addEventListener('click', (event) => {
  const withinImgBoundaries = event.composedPath().includes(lightboxImage)
  const withinTitleBoundaries = event.composedPath().includes(lightboxTitle)
  const withinPrevBoundaries = event.composedPath().includes(previousBtn)
  const withinNextBoundaries = event.composedPath().includes(nextBtn)

  if (withinImgBoundaries || withinTitleBoundaries || withinPrevBoundaries || withinNextBoundaries) {
      return;
    // console.log('Click happened inside element') ;
  } else {
    // console.log('Click happened outside element') ;
    lightbox.classList.remove("active");
  } 
})

//---------------------------------------------------------------------------------------------------------
//                                       S C R O L L   T O   T O P
//---------------------------------------------------------------------------------------------------------

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//---------------------------------------------------------------------------------------------------------
//                                                E N D
//---------------------------------------------------------------------------------------------------------