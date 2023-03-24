var a = 15;
var b = 5;
var c;


var exBox;



function down() {
    const box = document.querySelector('.column' + a + ' .row' + b);
    box.classList.remove('on');
    a--
    box.classList.add('on');
}

// function left() {
//     var bb = b + 1;
//     var box = document.querySelector('.column' + a + ' .row' + b);
//     var boxx = document.querySelector('.column' + c + ' .row' + bb);
//     boxx.classList.remove('on');
//     b--;
//     box.classList.add('on');
// }

// function right() {
//     var box = document.querySelector('.column' + a + ' .row' + b);
//     box.classList.remove('on');
//     b++;
//     box.classList.add('on');
// }





console.log(z);
var z = "안녕";



var click1 = document.querySelector('.column15 ul .row10');
var click2 = document.querySelector('.column14 ul .row10');
var click3 = document.querySelector('.column13 ul .row10');

click1.addEventListener('click', function () {
    down();
})
click2.addEventListener('click', function () {
    left();
})
click3.addEventListener('click', function () {
    right();
})