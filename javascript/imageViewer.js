//---------------------------------------------------------------------------------------------------------
//                                      I M A G E   V I E W E R
//---------------------------------------------------------------------------------------------------------

const lightbox = document.querySelector(".about-image-gallery .lightbox");
const lightboxImage = document.querySelector(".about-image-gallery .lightbox img");
const lightboxTitle = document.querySelector(".about-image-gallery .lightbox .title");
const nextBtn = document.querySelector(".about-image-gallery .next-btn");
const previousBtn = document.querySelector(".about-image-gallery .previous-btn");
const closeBtn = document.querySelector(".about-image-gallery .close-btn");
const firstImg = document.querySelector(".about-image-gallery .first");
const lastImg = document.querySelector(".about-image-gallery .last");

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

    lightboxImage.src = image.src;

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
    console.log('Click happened outside element') ;
    lightbox.classList.remove("active");
  } 
})