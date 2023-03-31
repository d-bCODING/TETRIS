var boxes = document.querySelectorAll('.block-list li ul li');
var columns = document.querySelectorAll('.block-list > li');

var click1 = document.querySelector('.column15 ul .row10');
var click2 = document.querySelector('.column14 ul .row10');
var click3 = document.querySelector('.column13 ul .row10');
var click4 = document.querySelector('.column12 ul .row10');

var barTP = 0;
var barLP = 4;
var bar = [
    columns[barTP].children[0].children[barLP],
    columns[barTP + 1].children[0].children[barLP],
    columns[barTP + 2].children[0].children[barLP],
    columns[barTP + 3].children[0].children[barLP]
]

var shiftBar = [
    columns[barTP].children[0].children[barLP - 2],
    columns[barTP].children[0].children[barLP - 1],
    columns[barTP].children[0].children[barLP],
    columns[barTP].children[0].children[barLP + 1]
]

var barL = [
    columns[barTP].children[0].children[barLP],
    columns[barTP + 1].children[0].children[barLP],
    columns[barTP + 2].children[0].children[barLP],
    columns[barTP + 2].children[0].children[barLP + 1]
]



for (let i = 0; i < bar.length; i++) {
    bar[i].classList.add('on');
}
var shape = 1;

// for (let i = 0; i < barL.length; i++) {
//     barL[i].classList.add('on');
// }
// var shape = 2;

var moving = document.querySelectorAll('.on');


var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
if (moving[3].innerHTML == "12 - 5") { //1자 도형
    b = 1,
        c = 2,
        d = 3
} else if (moving[3].innerHTML == "13 - 6") { //2 L자 도형
    b = 1,
        c = 2,
        d = 2,
        h = 1
}


var movingEl;
click1.addEventListener('click', function () {
    barTP++;

    moving = document.querySelectorAll('.on');
    for (let i = 0; i < moving.length; i++) {
        moving[i].classList.remove('on');
    }

    movingEl = [
        columns[barTP + a].children[0].children[barLP + e],
        columns[barTP + b].children[0].children[barLP + f],
        columns[barTP + c].children[0].children[barLP + g],
        columns[barTP + d].children[0].children[barLP + h]
    ]

    for (let i = 0; i < movingEl.length; i++) {
        movingEl[i].classList.add('on');
    }
})

click2.addEventListener('click', function () {
    moving = document.querySelectorAll('.on');
    for (let i = 0; i < moving.length; i++) {
        moving[i].classList.remove('on');
    }

    barLP--;

    movingEl = [
        columns[barTP + a].children[0].children[barLP + e],
        columns[barTP + b].children[0].children[barLP + f],
        columns[barTP + c].children[0].children[barLP + g],
        columns[barTP + d].children[0].children[barLP + h]
    ]

    for (let i = 0; i < movingEl.length; i++) {
        movingEl[i].classList.add('on');
    }

})

click3.addEventListener('click', function () {
    moving = document.querySelectorAll('.on');
    for (let i = 0; i < moving.length; i++) {
        moving[i].classList.remove('on');
    }

    barLP++;

    movingEl = [
        columns[barTP + a].children[0].children[barLP + e],
        columns[barTP + b].children[0].children[barLP + f],
        columns[barTP + c].children[0].children[barLP + g],
        columns[barTP + d].children[0].children[barLP + h]
    ]

    for (let i = 0; i < movingEl.length; i++) {
        movingEl[i].classList.add('on');
    }

})


click4.addEventListener('click', function () {
    moving = document.querySelectorAll('.on');
    for (let i = 0; i < moving.length; i++) {
        moving[i].classList.remove('on');
    }

    if (shape == 1) {
        a = a = 1;
        e = e - 1;
        c = c - 1;
        g = g + 1;
        d = d - 2;
        h = h + 2;
    }

    if (shape == 2) {
        a = a + 1;
        e = e - 1;
        c = c - 1;
        g = g + 1;
        d = d - 2;
    }

    movingEl = [
        columns[barTP + a].children[0].children[barLP + e],
        columns[barTP + b].children[0].children[barLP + f],
        columns[barTP + c].children[0].children[barLP + g],
        columns[barTP + d].children[0].children[barLP + h]
    ]

    for (let i = 0; i < movingEl.length; i++) {
        movingEl[i].classList.add('on');
    }

})