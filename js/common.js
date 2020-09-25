(function($) {

    // 레이어 popup 창 효과 (체크 클릭 후 닫기 버튼 누르면 사라짐)
    if ( $.cookie('pop') != 'none' ) {
        $('#popupBox').fadeIn(300)
    }

    $('#popupBox button').on('click', function(){
        var bool = $('#popupBox input').prop('checked')
        if ( bool ) {
            $.cookie('pop', 'none', {expires:1})
        }
        $('#popupBox').fadeOut(300)
    })



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
    
    // scroll 부분
    // var scrollSize = $(document).height() - $(window).height();
    var flag=true;
    var sct;
    $(window).on('scroll', function() {
        sct = $(this).scrollTop();
        if ( sct >= 92 && flag ) {
            $('#header').css({
                backgroundColor: '#000',
                color: '#fff',
                opacity: '0'
            }).stop().animate({
                height: '92px',
                opacity: '1'
            }, 500)
            $('.login a').css({
                backgroundColor: '#000',
                color: '#fff',
                opacity: '0'
            }).stop().animate({
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
            }, 500)
            $('.login a').css({
                backgroundColor: 'transparent',
                color: '#000',
                opacity: '0'
            }).stop().animate({
                opacity: '1'
            }, 500)
        }


        // gotop 버튼 생성
        if ( sct >= 100 ) {
            $('.gotop').addClass('on').stop().animate({
                opacity:'1'
            }, 500)
        } else {
            $('.gotop').removeClass('on').stop().animate({
                opacity:'0'
            }, 500)
        }

        // gotop 버튼 클릭시 up
        $('.gotop').on('click', function() {
            $('html, body').stop().animate({
                scrollTop:'0'
            }, 800, 'linear')
        })



        // company.html 스크롤 이벤트 발생하는 함수 호출
        // 스크롤 이벤트가 발생하면 html에서 #company_section을 찾아서 
        // 해당 구역이 존재하면 함수를 호출해서 애니메이션 수행
        if ( $('#newContainer').children().is('#company_section') ) {
            comScroll()
        }
        // main.html 스크롤 이벤트 발생하는 함수 호출
        if ( $('#newContainer').children().is('#main_section') ) {
            mainScroll()
        }



    }) // 윈도우 스크롤이벤트 프로그램 끝



    // company.html 스크롤 이벤트 발생
    function comScroll() {
        // com_step1 animation
        var cs1Near = $('.com_step1').offset().top - $(this).height()/2
        if ( sct >= cs1Near ) {
            $('.com_step1').addClass('on')
        } else if ( sct===0 ) {
            $('.com_step1').removeClass('on')
        }

        // com_step2 animation
        var sc2Near = $('.com_step2').offset().top - $(this).height()/2
        if ( sct >= sc2Near ) {
            $('.com_step2').addClass('on')
        } else if ( sct===0 ) {
            $('.com_step2').removeClass('on')
        }

        // com_step3 animation
        var sc3Near = $('.com_step3').offset().top - $(this).height()/2
        if ( sct >= sc3Near ) {
            $('.com_step3').addClass('on')
        } else if ( sct===0 ) {
            $('.com_step3').removeClass('on')
        }

        // com_step6 animation
        var sc6Near = $('.com_step6').offset().top - $(this).height()/2
        if ( sct >= sc6Near ) {
            $('.com_step6').addClass('on')
        } else if ( sct===0 ) {
            $('.com_step6').removeClass('on')
        }

        // com_step7 animation
        var sc7Near = $('.com_step7').offset().top - $(this).height()/2
        if ( sct >= sc7Near ) {
            $('.com_step7').addClass('on')
        } else if ( sct===0 ) {
            $('.com_step7').removeClass('on')
        }
    }


    // main.html 스크롤 이벤트 발생
    function mainScroll() { 
        // step1 scroll animation
        var s1Near = $('.step1').offset().top - $(this).height()/2
        if ( sct >= s1Near) {
            $('.step1').addClass('on')
        } else {
            $('.step1').removeClass('on')
        }

        // step2 scroll animation
        var s2Near = $('.step2').offset().top - $(this).height()/2
        if ( sct >= s2Near) {
            $('.container_fluid').addClass('on')
        } else {
            $('.container_fluid').removeClass('on')
        }
    
        // step3 scroll animation
        var s3Near = $('.step3').offset().top - $(this).height()/2
        if ( sct >= s3Near ) {
            $('.step3').addClass('on')
        } else {
            $('.step3').removeClass('on')
        }

        // step4 scroll animation
        var s4Near = $('.step4').offset().top - $(this).height()/3
        if ( sct >= s4Near ) {
            $('.step4').addClass('on')
        } else {
            $('.step4').removeClass('on')
        }
    
        // step5 scroll animation
        var s5Near = $('.step5').offset().top - $(this).height()/2
        if ( sct >= s5Near ) {
            $('.step5').addClass('on')
        } else {
            $('.step5').removeClass('on')
        }

        // step6 scroll animation
        var s6Near = $('.step6').offset().top - $(this).height()/2.5
        if ( sct >= s6Near ) {
            $('.step6').addClass('on')
        } else {
            $('.step6').removeClass('on')
        }

        // step8 scroll animation
        var s8Near = $('.step8').offset().top - $(this).height()/2.5
        if ( sct >= s8Near ) {
            $('.step8').addClass('on')
        } else {
            $('.step8').removeClass('on')
        }

        // step9 scroll animation
        var s9Near = $('.step9').offset().top - $(this).height()/2
        if ( sct >= s9Near ) {
            $('.step9').addClass('on')
        } else {
            $('.step9').removeClass('on')
        }
    }




    // mousewheel 이벤트 연결
    $('section').on("mousewheel", function (e, wh) {
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