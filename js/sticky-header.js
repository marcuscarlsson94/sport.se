// var $document = $(document),
//     $element = $('header'),
//     className = 'hasScrolled';
//
// $document.scroll(function() {
//   if ($document.scrollTop() >= 150) {
//     // user scrolled 150 pixels or more;
//     // do stuff
//     $element.addClass(fixed);
//   } else {
//     $element.removeClass(fixed);
//   }
// });

var $document = $(document),
    $element = $('header'),
    className = 'fixed';

$document.scroll(function() {
  $element.toggleClass(className, $document.scrollTop() >= 450);
});
