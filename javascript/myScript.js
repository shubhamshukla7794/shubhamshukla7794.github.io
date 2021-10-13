//---------------------------------------------------------------------------------------------------------
//                                  F A D E  -  I N   O N   D I S P L A Y
//---------------------------------------------------------------------------------------------------------

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // return;
            entry.target.classList.remove("appear");
        } else {
            entry.target.classList.add("appear");
            // appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})



//---------------------------------------------------------------------------------------------------------
//                                        N A V B A R   A C T I V E
//---------------------------------------------------------------------------------------------------------

const sections = document.querySelectorAll('section[id]');

const activeOptions = {
    threshold: 0.3
};

function activeCallback(entries, activeOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            const hash = '#' + entry.target.id;
            const navLink = document.querySelector(`a[href="${hash}"]`);
            // console.log(navLink);
            navLink.classList.remove('active');
        } else {
            const hash = '#' + entry.target.id;
            const navLink = document.querySelector(`a[href="${hash}"]`);
            // console.log(navLink);
            navLink.classList.add('active');
        }
    })
}

const activeOnScroll = new IntersectionObserver(activeCallback, activeOptions);

sections.forEach(section => {
    activeOnScroll.observe(section);
})

//---------------------------------------------------------------------------------------------------------
//                                          L I G H T B O X
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