$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        videoWidth: 400, 
        videoHeight: 300,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
  });
});

new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
    }
});
