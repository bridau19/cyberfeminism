
//// GALLERY PAGE ////

document.addEventListener('DOMContentLoaded', function(event) {

  // init with selector
  var msnry = new Masonry( '.grid', {
    // options...
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
  });
})
