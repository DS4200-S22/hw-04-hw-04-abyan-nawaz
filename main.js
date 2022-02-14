/*
circle one js
*/
let count = 1;

function updateCounter() {
    //updates the circle's html counter each time its clicked
    document.getElementById("circle-counter").innerHTML = count++;
}

document.getElementById("circle-one").addEventListener("click", updateCounter);

/*
circle two js
*/
function addBorder() {
    //adds a border to circle two
    document.getElementById("circle-two").classList.add("border");
}

function removeBorder() {
    //removes border from circle two
    document.getElementById("circle-two").classList.remove("border");
}

document.getElementById("circle-two").addEventListener("mouseover", addBorder);
document.getElementById("circle-two").addEventListener("mouseout", removeBorder);

/*
circle three js
*/
let isVisible = true;

function removeAndAdd() {
    if (isVisible) {
        document.getElementById("circle-three").classList.add("opacity");
        isVisible = false;
    } else {
        document.getElementById("circle-three").classList.remove("opacity");
        isVisible = true;
    }
}


document.getElementById("circle-three").addEventListener("click", removeAndAdd);
