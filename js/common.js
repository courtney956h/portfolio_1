(function() {

    $('#newBox').load('main.html')

    $('.topmenu a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#newContainer').remove()
        $('#newBox').load(url)
    })


    $('.h1Nav > h1 > a').on('click', function(){
        $('#newContainer').remove()
        $('#newBox').load('index.html')
    })

})(jQuery)