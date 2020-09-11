(function() {

    // mousewheel 이벤트 연결
    $('section').on('mousewheel', function(e, wh) {
        // 마우스 휠 올릴때
        if ( wh > 0 ) {
            var prev = $(this).prev().offset().top
            $('html, body').stop().animate({
                scrollTop: prev
            }, 800)
        } else if ( wh < 0 ) {
            var next = $(this).next().offset().top
            $('html, body').stop().animate({
                scrollTop: next
            }, 800)
        }
    })

    // #newBox에 각 html 삽입
    $('#newBox').load('main.html')

    $('.topmenu a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#newContainer').remove()
        $('#newBox').load(url)
    })


    // $('.h1Nav > h1 > a').on('click', function(){
    //     $('#newContainer').remove()
    //     $('#newBox').load('index.html')
    // })

})(jQuery)