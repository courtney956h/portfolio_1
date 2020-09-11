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

    // 메인 페이지 연결
    $('#newBox').load('main.html')

    // 회원가입, 로그인 페이지 연결
    $('.topmenu a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#newContainer').remove()
        $('#newBox').load(url)
    })

    // depth1 클릭시 서브페이지 연결
    $('.depth1 > li > a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#newContainer').remove()
        $('#newBox').load(url)
    })
    
    // depth2 클릭시 서브페이지 연결
    $('.depth2 > li > a').on('click', function(e) {
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