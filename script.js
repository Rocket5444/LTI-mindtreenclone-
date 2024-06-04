var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// javasript for image slider manual navigation

var manualNav =function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

//javascript for image slider autoplay navigation

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return
            }
            repeater();
        }, 2000);
    }
    repeater();
}
repeat();

setInterval(function(){
    if(currentSlide == slides.length - 1){
        currentSlide = 0;
    }
},2000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  });
  
  const growthSection = document.querySelector('.growth-section.scroll-to-reveal');
  observer.observe(growthSection);

  const mainSec = document.querySelector('.main-sec.scroll-to-reveal');
  observer.observe(mainSec);

  const creatingValueSection = document.querySelector('.creating-value.scroll-to-reveal');
  observer.observe(creatingValueSection);
