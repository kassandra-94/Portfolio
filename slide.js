
let slide = ["Empathy", "Approachability", "Helpfulness", "Approachability", "Patience", "Problem solving", "Accountability"];
let counter = 0;
let singleWord = document.getElementById("carousel-words");

setInterval(showSlide, 1000);

function showSlide () {
    singleWord.innerHTML = slide[counter];
    counter ++;
    if (counter >= slide.length) {
        counter =0 ;
    }
}






 