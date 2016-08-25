var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);

var slideButtonsContainer = document.getElementById("slide-buttons");

function addSlideButton(index) {
    var newSlideButton = document.createElement('span');
    newSlideButton.setAttribute('class', 'slideButton');

    var functionCall = 'changeToSlide(' + index + ')';
    newSlideButton.setAttribute('onclick', functionCall);

    slideButtonsContainer.appendChild(newSlideButton);
}

for (i = 0; i < slides.length; i++) {
    addSlideButton(i);
}

var slideButtons = document.querySelectorAll('#slide-buttons .slideButton');

if (slides.length > 0) {
    slideButtons[0].className = 'slideButton activeButton';
}

function changeToSlide(index) {
    index = index % slides.length;

    if (index !== currentSlide) {
        slides[currentSlide].className = 'slide';
        slideButtons[currentSlide].className = 'slideButton'

        currentSlide = index;

        slides[currentSlide].className = 'slide showing';
        slideButtons[currentSlide].className = 'slideButton activeButton'
    }
}

function nextSlide() {
    newSlide = (currentSlide+1)%slides.length;
    changeToSlide(newSlide);
}
