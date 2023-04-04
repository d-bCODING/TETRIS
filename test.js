var boxes = document.querySelectorAll('.block-list li ul li');
var rows = document.querySelectorAll('.block-list > li');

var click1 = document.querySelector('.column15 ul .row10');
var click2 = document.querySelector('.column14 ul .row10');
var click3 = document.querySelector('.column13 ul .row10');
var click4 = document.querySelector('.column12 ul .row10');

//1자바이자 기준
var barTP = 0;
var barLP = 4;

//1자바
var bar = [
    rows[barTP].children[0].children[barLP],
    rows[barTP + 1].children[0].children[barLP],
    rows[barTP + 2].children[0].children[barLP],
    rows[barTP + 3].children[0].children[barLP]
]

var barL = [
    rows[barTP].children[0].children[barLP],
    rows[barTP + 1].children[0].children[barLP],
    rows[barTP + 2].children[0].children[barLP],
    rows[barTP + 2].children[0].children[barLP + 1]
]

var barL2 = [
    rows[barTP].children[0].children[barLP],
    rows[barTP + 1].children[0].children[barLP],
    rows[barTP + 2].children[0].children[barLP],
    rows[barTP + 2].children[0].children[barLP - 1]
]

console.log(barL2);
// 도형별로 각자의 번호 매김, 해당 번호는 도형 모양 변경시 사용, 추후 삭제 가능성 있음.
// var shape = 1;
// for (let i = 0; i < bar.length; i++) {
//     bar[i].classList.add('on');
// }

// var shape = 2;
// for (let i = 0; i < barL.length; i++) {
//     barL[i].classList.add('on');
// }

var shape = 3;
for (let i = 0; i < barL2.length; i++) {
    barL2[i].classList.add('on');
}

//생성된 블록 객체 가져오기
var moving = document.querySelectorAll('.on');
console.log(moving);

//ㅣ자 도형을 기준으로 해당 변수들을 통해서 다른 모양들 생성
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
else if (moving[2].innerHTML == "13 - 4") { //문제발생, moving[3] 이랑 barL2[3]이 서로 안겹침.
    b = 1,
        c = 2,
        d = 2,
        h = -1
}


// 새로 생성된 도형 이후에 변경이나, 이동에 있어 새로 관여할 변수 생성
var movingEl;

//아래로 이동 버튼
click1.addEventListener('click', function () {
    barTP++;

    moving = document.querySelectorAll('.on');
    for (let i = 0; i < moving.length; i++) {
        moving[i].classList.remove('on');
    }

    movingEl = [
        rows[barTP + a].children[0].children[barLP + e],
        rows[barTP + b].children[0].children[barLP + f],
        rows[barTP + c].children[0].children[barLP + g],
        rows[barTP + d].children[0].children[barLP + h]
    ]

    for (let i = 0; i < movingEl.length; i++) {
        movingEl[i].classList.add('on');
    }
})

//왼쪽으로 이동 버튼
click2.addEventListener('click', function () {
    moving = document.querySelectorAll('.on');

    var columns = [];
    for (let i = 0; i < moving.length; i++) {
        columns[i] = moving[i].getAttribute('class').substring(3, 5);
    }
    columns.sort((a, b) => a - b);
    //현재 도형의 가장 왼쪽에 위치한 도형이 가진 열에 번호
    var minLimit = columns[0];

    if (minLimit > 1) {
        for (let i = 0; i < moving.length; i++) {
            moving[i].classList.remove('on');
        }
        barLP--;
        movingEl = [
            rows[barTP + a].children[0].children[barLP + e],
            rows[barTP + b].children[0].children[barLP + f],
            rows[barTP + c].children[0].children[barLP + g],
            rows[barTP + d].children[0].children[barLP + h]
        ]
        for (let i = 0; i < movingEl.length; i++) {
            movingEl[i].classList.add('on');
        }
    }
})

//오른쪽으로 이동 버튼
click3.addEventListener('click', function () {
    moving = document.querySelectorAll('.on');

    var columns = [];
    for (let i = 0; i < moving.length; i++) {
        columns[i] = moving[i].getAttribute('class').substring(3, 5);
        parseInt(columns[i]);
    }
    columns.sort((a, b) => a - b);
    //현재 도형의 가장 오른쪽에 위치한 도형이 가진 열에 번호
    var maxLimit = columns[columns.length - 1];
    
    if (maxLimit < 10) {
        for (let i = 0; i < moving.length; i++) {
            moving[i].classList.remove('on');
        }
        barLP++;
        movingEl = [
            rows[barTP + a].children[0].children[barLP + e],
            rows[barTP + b].children[0].children[barLP + f],
            rows[barTP + c].children[0].children[barLP + g],
            rows[barTP + d].children[0].children[barLP + h]
        ]
        for (let i = 0; i < movingEl.length; i++) {
            movingEl[i].classList.add('on');
        }
    }
})


//모양 변경 버튼
click4.addEventListener('click', function () {
    moving = document.querySelectorAll('.on');
    for (let i = 0; i < moving.length; i++) {
        moving[i].classList.remove('on');
    }

    //각 도형별로 모양 재설정
    if (shape == 1) {
        a = a = 1;
        e = e - 1;
        c = c - 1;
        g = g + 1;
        d = d - 2;
        h = h + 2;
    } else if (shape == 2) {
        a = a + 1;
        e = e - 1;
        c = c - 1;
        g = g + 1;
        d = d - 2;
    } else if (shape == 3) {
        a = a + 1;
        e = e + 1;
        c = c - 1;
        g = g - 1;
        d = d - 2;
    }

    movingEl = [
        rows[barTP + a].children[0].children[barLP + e],
        rows[barTP + b].children[0].children[barLP + f],
        rows[barTP + c].children[0].children[barLP + g],
        rows[barTP + d].children[0].children[barLP + h]
    ]

    for (let i = 0; i < movingEl.length; i++) {
        movingEl[i].classList.add('on');
    }

})



