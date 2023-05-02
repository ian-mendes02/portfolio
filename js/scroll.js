$(".scrollFrom").click(function() {
    $('html, body').animate({
        scrollTop: $(".scrollTo").offset().top
    }, 1000);
});