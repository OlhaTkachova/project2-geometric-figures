function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var square = document.getElementById("square")
square.onclick = function () {
    square.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')';
};
