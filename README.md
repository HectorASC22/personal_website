# personal_website

let rightArrowButton = document.getElementById("right_arrow");
let leftArrowButton = document.getElementById("left_arrow");

let firstCardDisplay = document.getElementById("card1");
firstCardDisplay.style.display = "block";
let firstCardstatus = firstCardDisplay.style.display;

let secondCardDisplay = document.getElementById("card2")
secondCardDisplay.style.display = "block";
let secondCardstatus = secondCardDisplay.style.display;

let thirdCardDisplay = document.getElementById("card3")
thirdCardDisplay.style.display = "block";
let thirdCardstatus = thirdCardDisplay.style.display;

let fourthCardDisplay = document.getElementById("card4")
fourthCardDisplay.style.display = "none";
let fourthCardstatus = fourthCardDisplay.style.display;

let cardIndex = 1;

let cards = document.getElementsByClassName("cards");


function cardSlideRight() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`card${i}`).style.display = "none";
        if (i == 4) {
            i = 1;
        }
    }
    cardIndex += 1;





    for (let i = cardIndex; i <= 4; i++) {
        document.getElementById(`card${i}`).style.display = "block";
        
    }
}

rightArrowButton.addEventListener("click", cardSlideRight);