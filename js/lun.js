let width = $('.banner-box1').width();
let timer = null;

function init() {
    initEvent()
    AutoPlay()
}

function AutoPlay() {
    timer = setInterval(function() {
        $('.banner-button-right').trigger('click');
    }, 2000)
}
$('.banner,.banner-dot').hover(function() {
    clearInterval(timer)
}, function() {
    console.log('a');
    AutoPlay()
})

function initEvent() {
    $('.buttons').on('click', onNavClick)
    $('.buttons-dot').on('click', onDotClick)
}

function onNavClick() {
    if ($(':animated').length > 0) {
        return
    }
    let $this = $(this);
    if ($this.hasClass('banner-button-right')) {
        $('.banner-box')
            .animate({
                'marginLeft': -width
            }, 1000, function() {
                $(this)
                    .css({
                        'marginLeft': 0
                    })
                    .append($('.banner-box').find('div:first'))
            })
    } else {
        $('.banner-box')
            .prepend($('.banner-box').find('div:last'))
            .css({
                'marginLeft': -width
            })
            .animate({
                'marginLeft': 0
            }, 1000, function() {
                // changeColor()
            })
    }
}

function onDotClick() {
    if ($(':animated').length > 0) {
        return
    }
    let $this = $(this);

    $this
        .addClass('banner-dots-big').removeClass('banner-width')
        .siblings('.banner-dots-big').removeClass('banner-dots-big').addClass('banner-width')

    if ($this.hasClass('banner-dot1')) {
        $('.banner-box')
            .animate({
                'marginLeft': -width
            }, 1000, function() {
                $(this)
                    .css({
                        'marginLeft': 0
                    })
                    .append($('.banner-box').find('div:first'))
            })
    } else {
        $('.banner-box')
            .prepend($('.banner-box').find('div:last'))
            .css({
                'marginLeft': -width
            })
            .animate({
                'marginLeft': 0
            }, 1000)
    }
}
init();