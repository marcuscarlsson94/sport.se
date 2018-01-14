// $('hamburger').click(function(){
//         $('body').addClass('slide-left');
// });

$(function() {
        $(".hamburger").click(function() {
            $("main").toggleClass('slide-left');
            if(!$(this).hasClass("change") )
            $('.swap').text('MENY');
            else
            $('.swap').text('STÄNG');
        });
    });



// $(function() {
//         $(".hamburger").click(function() {
//             $("main").toggleClass('slide-left');
//             if(!$(this).next('.hamburger').hasClass("change") )
//             $('.swap').text('STÄNG');
//             else if (!$(this).next('.hamburger').not(":hidden") )
//             $('.swap').text('MENY');
//         });
//     });




    // $('.swap').toggle(function(){
    //    $(this).text('MENY');
    //   },
    //  function(){
    //    $(this).text('STÄNG');
    //  }
    // );



// $(function() {
//         if $('.hamburger').hasClass(".change") { .click(function() {
//             $("body").removeClass('slide-left');
//         });
//
//     });
