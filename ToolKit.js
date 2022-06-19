// Creating an array for a set of background colors
const color_array = ['rgb(0, 125, 255)',
    'rgb(222, 0, 50)',
    'rgb(25, 255, 100)',
    'rgb(255, 255, 10)',
    'rgb(225, 25, 255)'
];

// Function defined for creating rotating squares
function CreateSquare() {
    const sector = document.getElementById('bg-effects');
    // Creating a span tag element
    const square = document.createElement('span');

    // Defining properties of the Span tag element created above
    var size = Math.random() * 50;
    var square_color = Math.floor(Math.random() * color_array.length);
    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    // innerWidth refers to the visible width of the screen
    square.style.left = Math.random() * innerWidth + 'px';
    // innerHeight refers to the visible height of the screen
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.backgroundColor = color_array[square_color];

    // Adding the created span tag to the section tag represented by id
    sector.appendChild(square);

    // Time function to set the removal time of the squares
    setTimeout(() => {
        square.remove();
    }, 5000);
    // 5000 here refers to 5 seconds or 5000 milliseconds
}

// 300 squares will be created
setInterval(CreateSquare, 150);
setInterval(CreateSquare, 150);

const btn1 = document.getElementById('btn1');
var check = false;

btn1.addEventListener('click', function() {
    if (check == false) {
        btn1.innerHTML = "Wifi On";
        check = true;
    } else {
        check = false;
        btn1.textContent = "Wifi Off";
    }
});

const btn2 = document.getElementById('btn2');
var check1 = false;

btn2.addEventListener('click', function() {
    if (check1 == false) {
        btn2.innerHTML = "Mobile Data On";
        check1 = true;
    } else {
        check1 = false;
        btn2.textContent = "Mobile Data Off";
    }
});

const btn3 = document.getElementById('btn3');
var check2 = false;

btn3.addEventListener('click', function() {
    if (check2 == false) {
        btn3.innerHTML = "Bluetooth On";
        check2 = true;
    } else {
        check2 = false;
        btn3.textContent = "Bluetooth Off";
    }
});

const btn4 = document.getElementById('btn4');
var check3 = false;

btn4.addEventListener('click', function() {
    if (check3 == false) {
        btn4.innerHTML = "Hotspot On";
        check3 = true;
    } else {
        check3 = false;
        btn4.textContent = "Hotspot Off";
    }
});

const btn5 = document.getElementById('btn5');
var check4 = false;

btn5.addEventListener('click', function() {
    if (check4 == false) {
        btn5.innerHTML = "Flight Mode On";
        check4 = true;
    } else {
        check4 = false;
        btn5.textContent = "Flight Mode Off";
    }
});

const btn6 = document.getElementById('btn6');
var check5 = false;

btn6.addEventListener('click', function() {
    if (check5 == false) {
        btn6.innerHTML = "Ringtone On";
        check5 = true;
    } else {
        check5 = false;
        btn6.textContent = "Ringtone Off";
    }
});