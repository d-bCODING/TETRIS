var boxes = document.querySelectorAll('.block-list li ul li');
var columns = document.querySelectorAll('.block-list > li');

var click1 = document.querySelector('.column15 ul .row10');
var click2 = document.querySelector('.column14 ul .row10');
var click3 = document.querySelector('.column13 ul .row10');

var bar = [columns[0].children[0].children[4],
            columns[1].children[0].children[4], 
            columns[2].children[0].children[4], 
            columns[3].children[0].children[4], 
        ]

for (let i = 0; i < bar.length; i++) {
    
    bar[i].classList.add('on');
}












// click1.addEventListener('click', function () {
//     down();
// })
// click2.addEventListener('click', function () {
//     left();
// })
// click3.addEventListener('click', function () {
//     right();
// })


// document.addEventListener('click', function () {

//     columns[startPoint].children[0].children[4].classList.add('on');
//     columns[startPoint+1].children[0].children[4].classList.add('on');
//     columns[startPoint+2].children[0].children[4].classList.add('on');
//     columns[startPoint+3].children[0].children[4].classList.add('on');

    
//     click1.addEventListener('click', function(){
//         console.log(startPoint + "dd");
//         startPoint++;
//     })

// })
