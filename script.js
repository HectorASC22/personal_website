let rightArrowButton = document.getElementById("right_arrow");
let leftArrowButton = document.getElementById("left_arrow");

let cardArray = Array.from(document.getElementsByClassName("cards"));


function cardSlideLeft() {
    //removes first card, puts it in variable and pushes variable into end of array
    let movingCard = cardArray[0];
    cardArray.push(movingCard);
    cardArray.shift();

    showcasingCards()
}

function cardSlideRight() {
    //removes first card, puts it in variable and pushes variable into end of array
    let movingCard = cardArray[cardArray.length - 1];
    cardArray.unshift(movingCard);
    cardArray.pop();

    showcasingCards()
}

function showcasingCards() {
    let cardHolder1 = document.getElementById("card1");
    let cardHolder2 = document.getElementById("card2");
    let cardHolder3 = document.getElementById("card3");
    cardHolder1.innerHTML = "";
    cardHolder2.innerHTML = "";
    cardHolder3.innerHTML = "";
    cardHolder1.appendChild(cardArray[0]); 
    cardHolder2.appendChild(cardArray[1]); 
    cardHolder3.appendChild(cardArray[2]); 
}

leftArrowButton.addEventListener("click", cardSlideLeft);
rightArrowButton.addEventListener("click", cardSlideRight);