// 文字滚动
let RoollDiv = document.querySelector('.nav-top-roll');
let RoollA = RoollDiv.querySelectorAll('a');

function roll() {
    let RoollFirst = RoollDiv.firstElementChild;
    let RoollLast = RoollDiv.lastElementChild;
    // RoollDiv.classList.add('RoollTextx');

    setTimeout(() => {
        RoollDiv.appendChild(RoollFirst);
        //     // RoollDiv.classList.remove('RoollText');
    }, 1000)
}
var stp = setInterval(roll, 1000)

RoollDiv.onmouseenter = function() {
    clearInterval(stp)
}
RoollDiv.onmouseleave = function(e) {
    stp = setInterval(roll, 1000)
}

// 点击微信二维码
let wx = document.querySelector('#weixin');
let wxDiv = document.querySelector('.wx');
wx.onclick = function() {
    wxDiv.classList.add('open')
}
wxDiv.onclick = function() {
    wxDiv.classList.remove('open')
}

// 文字滑过
$('.nav-bottom div a').hover(function() {
    $(this).css({
        'color': 'green'
    })
}, function() {
    $(this).css({
        'color': 'black'
    })
    $('.nav-bottom>div>a:first').css({
        'color': 'green'
    })
    $('.nav-bottom>div>a:last').css({
        'color': 'blue'
    })
})

// 图片文字滑过变大
let width_img = $('.product-container-left-item>img').width();
let box = $('.product-container-left-item');
$(box).hover(function() {
    $(this).find('img').css({
        'width': width_img + 10,
        'height': '50px'
    })
    $(this).find('h4').css({
        'fontSize': '18px'
    })
    $(this).children(1).css({
        'fontSize': '15px'
    })
}, function() {
    $(this).find('img').css({
        'width': width_img - 0,
        'height': '45px'
    })
    $(this).find('h4').css({
        'fontSize': '15px',
    })
})
$('.product-container-right-item').hover(function() {
    $(this).find('img').css({
        'width': width_img + 10,
        'height': '50px'
    })
    $(this).find('h4').css({
        'fontSize': '18px'
    })
    $(this).children(1).css({
        'fontSize': '15px'
    })
}, function() {
    $(this).find('img').css({
        'width': width_img - 0,
        'height': '45px'
    })
    $(this).find('h4').css({
        'fontSize': '15px',
    })
})