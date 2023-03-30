// var barDownStart = 15;
// var barSideStart = 5;


// var click1 = document.querySelector('.column15 ul .row10')
// var click2 = document.querySelector('.column14 ul .row10')
// var click3 = document.querySelector('.column13 ul .row10')

// click1.addEventListener('click', function () {
//     barDownStart--;
//     barDownMoving()
// })
// click2.addEventListener('click', function () {
//     barSideStart--;
//     barDownRemove()
// })
// click3.addEventListener('click', function () {
//     barSideStart++;
//     barDownRemove()
// })


// function barDown() {
//     var bar1 = document.querySelector('.column' + barDownStart + ' .row' + barSideStart);
//     var bar2 = document.querySelector('.column' + (barDownStart - 1) + ' .row' + barSideStart);
//     var bar3 = document.querySelector('.column' + (barDownStart - 2) + ' .row' + barSideStart);
//     var bar4 = document.querySelector('.column' + (barDownStart - 3) + ' .row' + barSideStart);
//     var bars = [bar1, bar2, bar3, bar4];

//     for (let i = 0; i < bars.length; i++) {
//         bars[i].classList.add('on');
//     }
// }

// function barDownRemove() {
//     var remove = barDownStart + 1;
//     if (remove <= 15) {
//         var bar1 = document.querySelector('.column' + remove + ' .row' + barSideStart);
//         var bar2 = document.querySelector('.column' + (remove - 1) + ' .row' + barSideStart);
//         var bar3 = document.querySelector('.column' + (remove - 2) + ' .row' + barSideStart);
//         var bar4 = document.querySelector('.column' + (remove - 3) + ' .row' + barSideStart);
//         var bars = [bar1, bar2, bar3, bar4];

//         for (let i = 0; i < bars.length; i++) {
//             bars[i].classList.remove('on');
//         }
//     }
// }

// function barDownMoving() {
//     barDownRemove();
//     barDown();
// }





// setInterval(() => {
//     barDownMoving()
// }, 1500);