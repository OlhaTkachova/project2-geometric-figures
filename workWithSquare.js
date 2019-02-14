function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var square = document.getElementById("square")
square.onclick = function () {
    square.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')';
};

var rectangle1 = document.getElementById("rectangle1")
rectangle1.onclick = function () {
    rectangle1.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')';
};

var rectangle2 = document.getElementById("rectangle2")
rectangle2.onclick = function () {
    rectangle2.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')';
};
