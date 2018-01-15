$(function() {
        $(".hamburger").click(function() {
            $("main").toggleClass('slide-left');
            if($(this).hasClass("change") )
            $('.swap').text('STÄNG');
            else
            $('.swap').text('MENY');
        });
    });
