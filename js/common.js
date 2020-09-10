(function() {

    $('#NewBox').load('main.html')

    $('.topmenu > a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#NewContainer').remove()
        $('#NewBox').load(url)
    })


    $('.h1Nav > h1 > a').on('click', function(e){
        e.preventDefault()
        $('#NewContainer').remove()
        $('#NewBox').load(url)
    })

})(jQuery)