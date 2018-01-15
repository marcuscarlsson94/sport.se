$(".carrear-trigger").click(function() {
    $('html, body').animate({
        scrollTop: $("#carrear").offset().top
    }, 800);
});

$(".contact-trigger").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
