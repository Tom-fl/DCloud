let width_ft = $('.lun-content-banner-box>li').width();
let timer_ft = null;

function init_ft() {
    initEvent_ft();
    AutoPlay_ft();
}

function AutoPlay_ft() {
    timer_ft = setInterval(() => {
        $('.lun-content-right').trigger('click'); // trigger 会自动触发事件
    }, 500)
}
$('.lun-content-banner-box,.lun-content-btn,.lun-content-dot-box').hover(() => {
    clearInterval(timer_ft);
}, () => {
    AutoPlay_ft();
})

function initEvent_ft() {
    $('.lun-content-btn').on('click', onNavClick_ft); // 两边按钮事件
    $('.lun-content-dot-box').on('click', 'li', onSliderNavClick_ft); // 下面小圆点事件
}

function onNavClick_ft() {
    if ($(':animated').length > 0) {
        return
    }
    let $this = $(this);
    if ($this.hasClass('lun-content-right')) {
        $('.lun-content-banner-box')
            .animate({
                'marginLeft': -width_ft
            }, 300, function() {
                $(this)
                    .css({
                        'marginLeft': 0
                    })
                    .append($('.lun-content-banner-box').find('li:first'));
                changeColor_ft();
            })
    } else {
        $('.lun-content-banner-box')
            .prepend($('.lun-content-banner-box').find('li:last'))
            .css({
                'marginLeft': -width_ft
            })
            .animate({
                'marginLeft': 0
            }, 300, function() {
                changeColor_ft();
            })
    }
}

function onSliderNavClick_ft() {
    if ($(':animated').length > 0) {
        return
    }
    let $this = $(this)
    let newIndex = $this.index();
    let oldIndex = $('.lun-content-banner-box').find('li:first').attr('index');

    console.log(newIndex);
    console.log(oldIndex);


    if (newIndex > oldIndex) {
        $('.lun-content-banner-box')
            .animate({
                'marginLeft': -width * (newIndex - oldIndex)
            }, 0, function() {
                $(this)
                    .css({
                        'marginLeft': 0
                    })
                for (let i = 0; i < newIndex - oldIndex; i++) {
                    $('.lun-content-banner-box').append($('.lun-content-banner-box').find('li:first'))
                }
                changeColor_ft();
            })
    } else if (newIndex < oldIndex) {
        for (let i = 0; i < oldIndex - newIndex; i++) {
            $('.lun-content-banner-box').prepend($('.lun-content-banner-box').find('li:last'))
            $('.lun-content-banner-box')
                .css({
                    'marginLeft': -width * (oldIndex - newIndex)
                })
                .animate({
                    'marginLeft': 0
                }, 0, function() {
                    changeColor_ft();
                })
        }
    }
}

function changeColor_ft() {
    let index = $('.lun-content-banner-box').find('li:first').attr('index')
    $('.lun-content-dot-box')
        .find('li')
        .eq(index)
        .addClass('on')
        .siblings('.on')
        .removeClass('on')
}

init_ft();