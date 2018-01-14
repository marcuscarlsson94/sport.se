// $('hamburger').click(function(){
//         $('body').addClass('slide-left');
// });

$(function() {
        $(".hamburger").click(function() {
            $("main").toggleClass('slide-left');
            if(!$(this).next('.change').is(":visible") )
            $('.swap').text('STÄNG');
            else if (!$(this).next('.change').is(":hidden") )
            $('.swap').text('MENY');
        });
    });




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
