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