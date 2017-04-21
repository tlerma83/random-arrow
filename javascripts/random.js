console.log("Let's do this");


document.addEventListener("click", imageDisplay);
var displayToDom = document.getElementById("wrapper");



function imageDisplay () {
    var random = Math.floor((Math.random() * 2) + 1);

    if (random % 2 === 0) {
        displayToDom.innerHTML = "<img src='../images/arrow-left.png' alt = 'image of left arrow'>";
    } else {
        displayToDom.innerHTML = "<img src='../images/arrow-right.jpg' alt='image of right arrow'>";
    }

}


