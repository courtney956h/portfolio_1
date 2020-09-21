(function($) {

    // loading 화면
    $(".introAni").addClass("on");
    var timer = setInterval(function () {
        $(".introAni").toggleClass("on");
    }, 1480);
    
    $(window).load(function () {
        $(".introAni")
        .delay(4500)
        .fadeOut(300, function () {
            clearInterval(timer);
        });
    });
    
    //scroll 부분
    var scrollSize = $(document).height() - $(window).height();
    var flag=true;
    $(window).on('scroll', function() {
        var sct = $(this).scrollTop();
        if ( sct >= 92 && flag ) {
            $('#header').css({
                backgroundColor: '#000',
                color: '#fff',
                opacity: '0'
            }).stop().animate({
                height: '92px',
                opacity: '1'
            }, 500)
            flag=false;
        } else if ( sct===0 && !flag ) {
            $('#header').css({
                backgroundColor: 'transparent',
                color: '#000',
                opacity: '0'
            }).stop().animate({
                height: '92px',
                opacity: '1'
            })
        }
    })


    // mousewheel 이벤트 연결
    $(".section").on("mousewheel", function (e, wh) {
        var index = $(this).index()
        // 마우스 휠 올릴때
        if ( wh > 0 ) {
            var prev = $(this).prev().offset().top
            $('html, body').stop().animate({
                scrollTop: prev
            }, 800)
        // 마우스 휠 내릴때
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