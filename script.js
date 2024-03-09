const container = document.querySelector('.container');

const slides = container.querySelectorAll('.slide');
const prevBtn = container.querySelector('.btn-prev');
const nextBtn = container.querySelector('.btn-next');

let currentIndex = 0;

function slideshow(){
   slides.forEach( (slide, index) => {
       // if(index === currentIndex ) slide.classList.add('active');
       // else slide.classList.remove('active');
        slide.classList.toggle('active', index === currentIndex);
   });
}

function moveToNext() {
    currentIndex++;
    if(currentIndex >= slides.length) currentIndex = 0;
    slideshow();
}

function moveToPrev() {
    currentIndex--;
    if(currentIndex <= 0) currentIndex = slides.length -1;
    slideshow();
}

// EVENT LISTNERS
nextBtn.addEventListener('click', moveToNext);
prevBtn.addEventListener('click', moveToPrev);